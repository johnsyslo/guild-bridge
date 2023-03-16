const { Events } = require('discord.js');
const Discord = require('discord.js');
const { client } = require('../../handler/bot');
require('dotenv').config();
const fs = require('fs');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./src/commands/').filter(file => file.endsWith('.js'));
                
for (const file of commandFiles) {
        const command = require(`../../commands/${file}`);
        client.commands.set(command.name, command);
}

module.exports = {
	name: Events.MessageCreate,
	execute(message) {
                if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;

	        const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/);
	        const command = args.shift().toLowerCase();

	        if (!client.commands.has(command)) return;

	        try {
		        client.commands.get(command).execute(message, args);
	        } catch (error) {
		        console.error(error);
		        message.reply('there was an error trying to execute that command!');
	        }
	},
};