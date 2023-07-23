const { EmbedBuilder } = require("discord.js");
const func = require("../../util/functions");

module.exports = {
	name: "execute",
	description: "Execute any command on the account.",
	aliases: ["exe"],
	type: "guild",
	staffOnly: true,
	async execute(message, args) {
		console.log(args);
		const embed = new EmbedBuilder();
		if (args.length <= 0) {
			embed
				// prettier ignore
				.setTitle("Error")
				.setDescription("> Enter a valid ign!")
				.setColor(0xff0000);
			await message.channel.send({ embeds: [embed] }).then((msg) => {
				setTimeout(() => msg.delete(), 5000);
			});
			return;
		}
		try {
			func.executeCommand(args);
			embed
				// prettier ignore
				.setTitle("Sucessfully Ran")
				.setDescription(`> Sucessfully ran  \`${args}\``)
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
