const { EmbedBuilder } = require('discord.js');
const { client } = require('../handler/bot');
require('dotenv').config();

module.exports = {
    Error: (content, user) => {
        return new EmbedBuilder()
            .setColor(0xFF0000)
            .setTitle('Error!')
            .setDescription(content)
            .setFooter({ text: `${user.username}`, iconURL: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}` })
            .setTimestamp()
    },

    getRank: (rank) => {
        switch (rank) {
            case undefined:
                return [''];
            case '[VIP]':
                return ['<:vip1:1080994899505193041><:vip2:1080994910930481172><:vip3:1080994917511340072>', 0x55FF55];
            case '[VIP+]':
                return ['<:vipPlus1:1080994950881234985><:vipPlus2:1080994952667996211><:vipPlus3:1080994954022756412>', 0x55FF55];
            case '[MVP]':
                return ['<:mvp1:1080994993772187771><:mvp2:1080994996259401779><:mvp3:1080994997362495508>', 0x55FFFF];
            case '[MVP+]':
                return ['<:mvpPlus1:1080995018581479434><:mvpPlus2:1080995019990782003><:mvpPlus3:1080995020678643895><:mvpPlus4:1080995022222147695>', 0x55FFFF];
            case '[MVP++]':
                return ['<:mvpPlusPlus1:1080995053729763430><:mvpPlusPlus2:1080995055357141054><:mvpPlusPlus3:1080995056250531890><:mvpPlusPlus4:1080995057252974639>', 0xFFAA00]
            case '[YOUTUBE]':
                return ['<:youtube1:1080995079331795004><:youtube2:1080995080745263174><:youtube3:1080995081860943882><:youtube4:1080995082972450857><:youtube5:1080995084331401298>', 0xFF5555]
        }
    },

    sendToDiscord: (channel, content) => {
        if (channel === 'guild') {
            client.channels.cache.get(process.env.GUILDCHAT).send({ embeds: [content] });
        } else {
            client.channels.cache.get(process.env.GUILDCHAT).send({ embeds: [content] });
        }
    }
}