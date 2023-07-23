const { EmbedBuilder, Events, Collection } = require("discord.js");
const { client } = require("../../main");
require("dotenv").config();

const badWords = require("../../util/badWords");
const fs = require("node:fs");
const func = require("../../util/functions");

client.commands = new Collection();
client.aliases = new Collection();

const commandFolders = fs.readdirSync("./src/commands");
for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./src/commands/${folder}`).filter((file) => file.endsWith(".js"));
	for (const file of commandFiles) {
		const command = require(`../../commands/${folder}/${file}`);
		client.commands.set(command.name, command);

		if (command.aliases) {
			for (const alias of command.aliases) {
				client.aliases.set(alias, command);
			}
		}
	}
}

module.exports = {
	name: Events.MessageCreate,
	execute(message) {
		const embed = new EmbedBuilder();
		// Discord Command Handler
		if (message.content.startsWith(process.env.PREFIX)) {
			const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/);
			const commandName = args.shift().toLowerCase();
			const command = client.commands.get(commandName) || client.aliases.get(commandName);

			const permsError = embed
				.setColor("Red")
				.setTitle("Error")
				.setDescription("> You don't have permission to run this command!");

			if (command.staffOnly && !message.member.roles.cache.has(process.env.STAFF_ROLE_ID)) {
				message.reply({ embeds: [permsError] }).then((msg) => {
					setTimeout(() => msg.delete(), 5000);
				});
				return;
			} else if (command.recOnly && !message.member.roles.cache.has(process.env.RECRUITER_ROLE_ID)) {
				message.reply({ embeds: [permsError] }).then((msg) => {
					setTimeout(() => msg.delete(), 5000);
				});
				return;
			}

			if (!client.commands.has(command.name)) return;
			try {
				command.execute(message, args);
			} catch (error) {
				console.error(error);
				embed
					.setColor("Red")
					.setTitle("Error")
					.setDescription("There was an error running this command")
					.setTimestamp(),
					message.reply({ embeds: [embed] }).then((msg) => {
						setTimeout(() => msg.delete(), 3000);
					});
			}
		} else {
			// Discord -> Guild Message Handler
			if (message.channel == process.env.MEMBER_CHANNEL_ID || message.channel == process.env.OFFICER_CHANNEL_ID) {
				if (message.author.bot || message.attachments.size > 0 || message.member === null) return;
				if (badWords.some((word) => message.content.includes(word))) {
					message.delete();
					message.channel.send({
						embeds: [
							embed
								.setColor(0xff0000)
								.setTitle("Bad Blighter")
								.setDescription("No naughty words!")
								.setTimestamp(),
						],
					});
				} else {
					func.sendToGuild(
						message.channel == process.env.MEMBER_CHANNEL_ID ? "Guild" : "Officer",
						message.member.nickname
							? message.member.nickname + " » " + `${message.content}`
							: message.member.user.username + " » " + `${message.content}`,
					);
				}
			}
		}
	},
};
