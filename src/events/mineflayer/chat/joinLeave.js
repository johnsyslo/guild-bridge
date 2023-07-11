const { EmbedBuilder } = require('discord.js');
const func = require('../../../util/function');

module.exports = {
    name: 'chat:joinLeave',
	async execute(player, status) {
        let emoji = '';
        status === 'joined' ? emoji = `:inbox_tray:` : emoji = `:outbox_tray:`;
        const embed = new EmbedBuilder()
            .setDescription(`${emoji} ${player} has ${status}!`)
            .setColor(status === 'joined' ? 0x90EE90 : 0xFF474C)

        func.sendToDiscord(process.env.GUILD_CHANNEL, embed);
	},
};