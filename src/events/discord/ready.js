const { Events, ActivityType } = require("discord.js");

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		client.user.setPresence({
			activities: [{ name: `Rewrite in Progress | by oIreland`, type: ActivityType.Playing }],
			status: "online",
		});
	},
};
