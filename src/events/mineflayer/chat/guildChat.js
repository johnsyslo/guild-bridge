const mineflayer = require('mineflayer')
const { bot } = require('../../../handler/bot')

module.exports = {
    name: 'chat:guildChat',
	async execute(channel, rank, name, grank, msg) {
        console.log(`${channel}     ${rank}     ${name}      ${grank}       ${msg}`)
	},
};