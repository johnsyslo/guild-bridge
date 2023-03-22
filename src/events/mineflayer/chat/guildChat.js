const { EmbedBuilder } = require('discord.js');
const func = require('../../../util/functions');

module.exports = {
    name: 'chat:guildChat',
	async execute(channel, rank, name, grank, msg) {
        let guildRank = '';
        if (typeof grank === 'undefined'){ 
            guildRank = '';
        } else { guildRank = grank }
        let rankDetails = func.getRank(rank);
        const embed = new EmbedBuilder()
            .setDescription(`${rankDetails[0] ? rankDetails[0] : ""}` + ` ${name}` + `${grank ? " " + grank + ":"  : ":"}` + ` ${msg}`)
            .setColor(rankDetails[1])

            func.sendToDiscord(channel, embed)
	},
};