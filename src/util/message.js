const { EmbedBuilder } = require('discord.js');

module.exports = {
    Error: (content, user) => {
        return new EmbedBuilder()
            .setColor(0xFF0000)
            .setTitle('Error!')
            .setDescription(content)
            .setFooter({ text: `${user.username}`, iconURL: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}` })
            .setTimestamp()
    },
}