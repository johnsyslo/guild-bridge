const { Events, ActivityType } = require('discord.js')
require('dotenv').config();

module.exports = {
	name: Events.MessageCreate,
	execute(message) {
        if (message.author.bot || !message.content.startsWith(process.env.PREFIX)) return;
        const commandBody = message.content.slice(process.env.PREFIX.length);
        const args = commandBody.split(' ');
        const command = args.shift().toLowerCase();

        console.log(message.content)
	},
};