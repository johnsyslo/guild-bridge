const { bot } = require('../main');
const fs = require('fs');
const path = require('path');

// Mineflayer Event Handler
const mineflayerEventFolder = fs.readdirSync('./src/events/mineflayer');

for (const folder of mineflayerEventFolder) {
	const mineflayerEventFiles = fs.readdirSync(`./src/events/mineflayer/${folder}`).filter((file) => file.endsWith('.js'));
	for (const file of mineflayerEventFiles) {
    	const filePath = path.join('../events/mineflayer', folder, file)
		const mineflayerEvent = require(filePath)
		if (mineflayerEvent.once == true) {
			bot.once(mineflayerEvent.name, (...args) => mineflayerEvent.execute(...args));
		} else {
			bot.on(mineflayerEvent.name, (...args) => mineflayerEvent.execute(...args));
		}
  	}
}

// Mineflayer Chat Patterns
const chatEvents = require('../util/chatEvents');
for (var key in chatEvents) {
	bot.chatAddPattern(
		chatEvents[key],
		key,
	)
}