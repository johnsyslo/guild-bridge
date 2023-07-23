const { bot } = require("../../../main");

module.exports = {
	name: "login",
	once: true,
	async execute() {
		console.log(`Logged in as ${bot.username}!`);
	},
};
