const { Events, Collection } = require('discord.js');
const  { client } = require("../../main");
const badWords = require("../../util/badWords");
const util = require("../../util/function")
const fs = require('fs');
require('dotenv').config();

client.commands = new Collection();
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
            message.reply({ embeds: [util.Error('There was an error running this command!', message.author)] })
        }
    }
}