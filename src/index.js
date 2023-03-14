const { Client, GatewayIntentBits, ActivityType } = require("discord.js");
require('dotenv').config();

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
client.login(process.env.TOKEN);
const discordEventListener = require('./handlers/discordEvent');