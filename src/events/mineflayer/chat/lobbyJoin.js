const { bot } = require('../../../handler/bot')

module.exports = {
    name: 'chat:lobbyJoin',
	async execute() {
        bot.chat('§')
	},
};