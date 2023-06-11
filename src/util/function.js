const { Collection } = require('discord.js');
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

    Error: (content, user) => {
        return new EmbedBuilder()
            .setColor(0xFF0000)
            .setTitle('Error!')
            .setDescription(content)
            .setFooter({ text: `${user.username}`, iconURL: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}` })
            .setTimestamp()
    },
}