const { EmbedBuilder } = require("discord.js");
const func = require("../../../util/functions");

module.exports = {
	name: "chat:joinLeave",
	async execute(player, status) {
		let emoji = "";
		status === "joined" ? (emoji = `:inbox_tray:`) : (emoji = `:outbox_tray:`);
		const embed = new EmbedBuilder()
			.setDescription(`${emoji} ${player} has ${status}!`)
			.setColor(status === "joined" ? 0x90ee90 : 0xff474c);

		func.sendToDiscord(process.env.MEMBER_CHANNEL_ID, embed);
	},
};
