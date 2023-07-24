const { EmbedBuilder } = require("discord.js");
const func = require("../../util/functions");

module.exports = {
	name: "kick",
	description: "Kick a member from the guild.",
	aliases: ["k"],
	type: "guild",
	staffOnly: true,
	async execute(message, args) {
		const embed = new EmbedBuilder();
		if (args.length <= 0) {
			embed
				// prettier ignore
				.setTitle("Error")
				.setDescription("> Enter  a valid ign!")
				.setColor(0xff0000);
			await message.channel.send({ embeds: [embed] }).then((msg) => {
				setTimeout(() => msg.delete(), 5000);
			});
			return;
		}
		try {
			const username = args[0];
			const reason = args.splice(1).join(" ");

			func.executeCommand(`/g kick ${username} ${reason}`);

			embed
				// prettier ignore
				.setTitle("Sucess")
				.setDescription(`> Kicked \`${username}\``)
				.setColor(0x00ff00);
		} catch (error) {
			embed
				// prettier ignore
				.setTitle("Error")
				.setDescription(`> ${error}`)
				.setColor(0xff0000);
		}
		await message.channel.send({ embeds: [embed] });
	},
};
