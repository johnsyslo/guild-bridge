const { EmbedBuilder } = require('discord.js')
const { client } = require('../main')

module.exports = {
	name: 'ping',
	description: 'Check the ping of the bot and Discord api.',
	async execute(message, args) {
		const pingEmbed = new EmbedBuilder()
			.setColor(0x32cd32)
			.setTitle('Pong :ping_pong:')
			.setDescription('The ping of both the bot and discord api.')
			.setThumbnail('https://media.giphy.com/media/fvA1ieS8rEV8Y/giphy.gif')
			.addFields(
				{ name: 'Uptime', value: `${Math.round(client.uptime / 60000)} mins`, inline: true },
				{ name: 'Bot Ping', value: `${Date.now() - message.createdTimestamp}ms`, inline: true },
				{ name: 'API Ping', value: `${client.ws.ping}ms`, inline: true },
			)
			.setFooter({ text: `${message.author.username}#${message.author.discriminator}`, iconURL: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}` })
			.setTimestamp()
        
            await message.channel.send({ embeds: [pingEmbed] })
	},
};