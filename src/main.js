// ***************
// * Bridge Bot  *
// * By oIreland *
// ***************

const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();
const mineflayer = require("mineflayer");
const setUp = require("./util/setup");

// Create the Discord instance intents.
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMessageReactions,
	],
});

const bot = mineflayer.createBot({
	username: process.env.MINECRAFT_EMAIL,
	password: process.env.MINECRAFT_PASSWORD,
	host: "mc.hypixel.net",
	version: "1.16.4",
	logErrors: true,
	hideErrors: true,
	auth: process.env.MINECRAFT_AUTH_TYPE,
	checkTimeoutInterval: 30000,
});

module.exports = { client, bot };
client.login(process.env.TOKEN);
setUp.Process();
