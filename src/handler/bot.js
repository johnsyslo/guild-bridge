const { Client, GatewayIntentBits } = require("discord.js");
require('dotenv').config();
const fs = require('node:fs');
const path = require('node:path');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions,
		GatewayIntentBits.GuildMembers,
    ],
});
module.exports = { client }

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