const mineflayer = require('mineflayer')
const { bot } = require('../../../handler/bot')

module.exports = {
    name: 'chat:joinLimbo',
	async execute() {
        console.log(`Bot joined limbo.`)
	},
};