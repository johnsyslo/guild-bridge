const { EmbedBuilder } = require('discord.js');
const util = require('../../../util/message');

module.exports = {
    name: 'chat:guildChat',
	async execute(channel, rank, name, grank, msg) {
        let guildRank = '';
        if (typeof grank === 'undefined'){ 
            guildRank = '';
        } else { guildRank = grank }
        let rankDetails = util.getRank(rank);
        const embed = new EmbedBuilder()
            .setDescription(`${rankDetails[0] ? rankDetails[0] : ""}` + ` ${name}` + `${grank ? " " + grank + ":"  : ":"}` + ` ${msg}`)
            .setColor(rankDetails[1])

        util.sendToDiscord(channel, embed)
	},
};