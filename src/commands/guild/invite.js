const { EmbedBuilder } = require("discord.js");
const func = require("../../util/functions");

module.exports = {
	name: "invite",
	description: "Invite a member to the guild.",
	aliases: ["i", "inv"],
	type: "guild",
	staffOnly: true,
	async execute(message, user) {
		const embed = new EmbedBuilder();
		if (user.length <= 0) {
			embed
				// prettier ignore
				.setTitle("Error")
				.setDescription("> Enter a valid ign!")
				.setColor(0xff0000);
			await message.channel.send({ embeds: [embed] });
			return;
		}
		try {
			func.executeCommand(`/g invite ${user[0]}`);
			embed
				// prettier ignore
				.setTitle("Invited!")
				.setDescription(`> \`${user[0]}\` has been invited!`)
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
