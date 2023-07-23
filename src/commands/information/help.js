const { EmbedBuilder } = require("discord.js");
const { client } = require("../../main");
require("dotenv").config();

module.exports = {
	name: "help",
	description: "Get help with the bot.",
	aliases: ["h"],
	type: "info",
	async execute(message, args) {
		const embed = new EmbedBuilder()
			.setTitle("Commands")
			.setDescription("Use `,help <command>` to learn more about that command.")
			.setColor(0x6f47cc)
			.setTimestamp();
		if (args[0]) {
			message.reply({
				embeds: [
					embed
						// prettier ignore
						.setColor(0xff0000)
						.setTitle("Error")
						.setDescription("Not finished!")
						.setTimestamp(),
				],
			});
		} else {
			let guildCommands = [];
			let infoCommands = [];

			const commands = client.commands;
			for (const command of commands) {
				let name = process.env.PREFIX + `${command[0]}`;
				switch (command[1].type) {
					case "guild": {
						guildCommands.push(name);
						break;
					}
					case "info": {
						infoCommands.push(name);
						break;
					}
				}
			}

			embed.addFields(
				{ name: "Information", value: "" + (infoCommands.sort().join(" ") || "No Commands") },
				{ name: "Guild Commands", value: "" + (guildCommands.sort().join(" ") || "No Commands") },
			);

			message.reply({ embeds: [embed] });
		}
	},
};