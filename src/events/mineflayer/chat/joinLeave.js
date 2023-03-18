const mineflayer = require('mineflayer')
const { bot } = require('../../../handler/bot')

module.exports = {
    name: 'chat:joinLeave',
	async execute(player, status) {
        console.log(`${player} has ${status}!`)
	},
};