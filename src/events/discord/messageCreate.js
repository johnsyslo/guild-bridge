const { Events, Collection } = require('discord.js');
const  { client } = require("../../main");
require('dotenv').config();

const badWords = require("../../util/badWords")
const em = require("../../util/embed")
const fs = require("fs");
const func = require("../../util/function")

client.commands = new Collection();
const commandFiles = fs.readdirSync('./src/commands/').filter(file => file.endsWith('.js'));
        
for (const file of commandFiles) {
    const command = require(`../../commands/${file}`);
    client.commands.set(command.name, command);
}

module.exports = {
    name: Events.MessageCreate,
    execute(message) {
        // Discord Command Handler
        if (message.content.startsWith(process.env.PREFIX)){
            if (message.author.bot) return;
            const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/);
            const command = args.shift().toLowerCase();
            
            if (!client.commands.has(command)) return;
            try {
                client.commands.get(command).execute(message, args);
            } catch (error) {
                console.error(error);
                message.reply({ embeds: [em.Error('There was an error running this command!', message.author)] })
            }
        } else {
            // Discord -> Guild Message Handler
            if (message.channel == process.env.GUILD_CHANNEL || message.channel == process.env.OFFICER_CHANNEL){
                if (message.author.bot || message.attachments.size > 0 || message.member === null) return;
                if (badWords.some((word) => message.content.includes(word))){
                    message.delete();
				    message.channel.send({ embeds: [em.Stop('No naughty words!', message.author)] })
			    } else {
                    func.sendToGuild(message.channel == process.env.GUILD_CHANNEL ? 'Guild' : 'Officer', message.member.nickname + ': ' + message.content)
                }
            }
        }
    }
}