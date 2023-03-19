const { EmbedBuilder } = require('discord.js');
const util = require('../util/message');
const fs = require('fs');
require('dotenv').config();

module.exports = {
	name: 'help',
	description: 'Get help with the bot.',
	async execute(message, args) {
        const embed = new EmbedBuilder()
            .setTitle('Commands')
            .setDescription('Use \`,help <command>\` to learn more about that command.')
            .setColor(0x6f47cc)
            .setFooter({ text: `${message.author.username}#${message.author.discriminator}`, iconURL: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}` })
			.setTimestamp()
        if (!args[0]){
            const commandFiles = fs.readdirSync('./src/commands/').filter(file => file.endsWith('.js'));
            for (const file of commandFiles) {
                const command = require(`../commands/${file}`);
                embed.addFields({ name: command.name, value: command.description })
            } 
            message.reply({ embeds: [embed] })
        } else {
            message.reply({ embeds: [util.Error('Not finished!', message.author)] })
        }
	},
};