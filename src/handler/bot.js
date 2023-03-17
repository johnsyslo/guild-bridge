const { Client, GatewayIntentBits } = require("discord.js");
require('dotenv').config();
const mineflayer = require('mineflayer')
const fs = require('node:fs');
const path = require('node:path');

// Create the Discord Client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions,
		GatewayIntentBits.GuildMembers,
    ],
});

const mbot = mineflayer.createBot({
	username: process.env.MINECRAFT_EMAIL,
	password: process.env.MINECRAFT_PASSWORD,
	host: "mc.hypixel.net",
	version: "1.16.4",
	logErrors: true,
	hideErrors: true,
	auth: 'microsoft',
	checkTimeoutInterval: 30000,
});
module.exports = { client, mbot }

// Event Handler
const discordEventFiles = fs.readdirSync('./src/events/discord').filter(file => file.endsWith('.js'));

for (const file of discordEventFiles) {
	const filePath = path.join('../events/discord', file);
	const discordEvent = require(filePath);
	if (discordEvent.once) {
		client.once(discordEvent.name, (...args) => discordEvent.execute(...args));
	} else {
		client.on(discordEvent.name, (...args) => discordEvent.execute(...args));
	}
}
client.login(process.env.TOKEN);