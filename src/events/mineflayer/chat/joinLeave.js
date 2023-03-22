const { EmbedBuilder } = require('discord.js')
const func = require('../../../util/functions')

module.exports = {
    name: 'chat:joinLeave',
	async execute(player, status) {
        let emoji = '';
        if (status === 'joined'){ emoji = `:inbox_tray:` } else { emoji = `:outbox_tray:` }
        const embed = new EmbedBuilder()
            .setDescription( `${emoji} ${player} has ${status}!`)

        func.sendToDiscord('Guild', embed);
	},
};