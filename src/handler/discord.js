const { client } = require('../main');
const fs = require('fs');
const path = require('path');

// Discord Event Handler
const discordEventFiles = fs.readdirSync('./src/events/discord').filter(file => file.endsWith('.js'));

for (const file of discordEventFiles) {
	const filePath = path.join('../events/discord', file);
	const discordEvent = require(filePath);
	if (discordEvent.once) {
		client.once(discordEvent.name, (...args) => discordEvent.execute(...args));
	} else {
		client.on(discordEvent.name, (...args) => discordEvent.execute(...args));
	}
}
