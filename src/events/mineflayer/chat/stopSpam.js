const mineflayer = require('mineflayer')
const { bot } = require('../../../handler/bot')

module.exports = {
    name: 'chat:stopSpam',
	async execute() {
        console.log(`Can't say that twice!`)
	},
};