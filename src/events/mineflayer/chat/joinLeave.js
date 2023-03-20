const { EmbedBuilder } = require('discord.js')
const util = require('../../../util/message')

module.exports = {
    name: 'chat:joinLeave',
	async execute(player, status) {
        let emoji = '';
        if (status === 'joined'){ emoji = `:inbox_tray:` } else { emoji = `:outbox_tray:` }
        const embed = new EmbedBuilder()
            .setDescription( `${emoji} ${player} has ${status}!`)

        util.sendToDiscord('guild', embed);
	},
};