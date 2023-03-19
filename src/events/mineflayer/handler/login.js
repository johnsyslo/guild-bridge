const { bot } = require('../../../handler/bot')

module.exports = {
    name: 'login',
	once: true,
	async execute() {
        console.log(`Logged in as ${bot.username}!`)
	},
};