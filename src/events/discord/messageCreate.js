const { Events, Collection } = require('discord.js');
const { client } = require('../../handler/bot');
const logger = require('../../util/message');
const badWords = require('../../util/badWords');
require('dotenv').config();
const fs = require('fs');

client.commands = new Collection();
const commandFiles = fs.readdirSync('./src/commands/').filter(file => file.endsWith('.js'));
                
for (const file of commandFiles) {
        const command = require(`../../commands/${file}`);
        client.commands.set(command.name, command);
}

module.exports = {
	name: Events.MessageCreate,
	execute(message) {
		if (message.content.startsWith(process.env.PREFIX)){
			if (message.author.bot) return;

			const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/);
			const command = args.shift().toLowerCase();
	
			if (!client.commands.has(command)) return;
	
			try {
				client.commands.get(command).execute(message, args);
			} catch (error) {
				console.error(error);
				message.reply({ embeds: [util.Error('There was an error running this command!', message.author)] })
			}
		} else {
			if (message.author.bot || message.attachments.size > 0 || message.member === null || (message.channel != process.env.GUILDCHAT && message.channel != process.env.OFFICERCHAT)) return;
			if (badWords.includes(message.content)){
				logger.Warn('You cannot use profane language!', message)
			}
		}  	
	}
};