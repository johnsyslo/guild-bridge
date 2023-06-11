const { Events, ActivityType } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
	    client.user.setPresence({
		  activities: [{ name: `Rewrite in Progress | by dwsysfx#9543`, type: ActivityType.Playing }],
		  status: 'online',
	    });
	},
};