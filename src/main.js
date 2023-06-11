const { Client, GatewayIntentBits } = require("discord.js")
require("dotenv").config();
const mineflayer = require('mineflayer')
const func = require("../src/util/function")

// Create the Discord client or connection to the server.
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions,
    ]
})

const bot = mineflayer.createBot({
	username: process.env.MINECRAFT_EMAIL,
	password: process.env.MINECRAFT_PASSWORD,
	host: "mc.hypixel.net",
	version: "1.16.4",
	logErrors: true,
	hideErrors: true,
	auth: 'microsoft',
	checkTimeoutInterval: 30000,
});

module.exports = { client, bot };
client.login(process.env.TOKEN);
func.setUp();