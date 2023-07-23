const { EmbedBuilder, WebhookClient } = require("discord.js");
require("dotenv").config();

module.exports = {
	name: "chat:guildChat",
	async execute(channel, rank, player, grank, message) {
		if (player == process.env.USERNAME) return;
		const webhookClient = new WebhookClient({ url: process.env.MEMBER_WEBHOOK_URL });

		const embed = new EmbedBuilder();
		await webhookClient.send({
			embeds: [embed.setColor(Math.floor(Math.random() * 16777214) + 1).setDescription(message)],
			username: player,
			avatarURL: `https://mc-heads.net/avatar/${player}/300w`,
		});
	},
};
