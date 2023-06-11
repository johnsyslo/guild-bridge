const { client, bot } = require('../main');

module.exports  = {
    setUp: () => {
        require('../handler/discord')
        require('../handler/mineflayer')
    },

    sendToDiscord: (channel, content) =>  {
        client.channels.cache.get(channel).send({ embeds: [content] })
    },

    sendToGuild: (channel, content) => {
        if (channel === 'Guild') {
            bot.chat(`/gc ${content}`)
        } else {
            bot.chat(`/oc ${content}`)
        }
    },
}