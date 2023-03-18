const mineflayer = require('mineflayer')
const { bot } = require('../../handler/bot')
const util = require('../../util/message')

module.exports = {
    name: 'message',
    once: false,
	async execute(jsonMsg) {
        message = JSON.stringify(jsonMsg)
        // Guild to Discord
        if (jsonMsg.extra) {
            if (jsonMsg.text == '' && jsonMsg.extra[0].text.startsWith('§2Guild > ')) {
                let username = jsonMsg.extra ? jsonMsg.extra[0].text.replace('§2Guild > ', '').replace(/§7/g, '').replace(/§f/g, '').replace(/§3/g, '').replace(/§a/g, '').replace(/§6/g, '').replace(/§b/g, '').replace(/§d/, '').replace(/§c/g, '').replace(/§d/g, '').replace(/§e/g, '').replace(/§1/g, '').replace(/§0/g, '').replace(/§2/g, '').replace(/§4/g, '').replace(/§5/g, '').replace(/§8/g, '').replace(/§9/g, '').replace('[VIP] ', '').replace('[VIP+] ', '').replace('[MVP] ', '').replace('[MVP+] ', '').replace('[MVP++] ', '').replace(' [GM]', '').replace(' [Demo]', '').replace(' [Warden]', '').replace(' [REC]', '').replace(' [Ariel]', '').replace(':', '').replace(' ', '') : null;
                let msg = jsonMsg.extra ? jsonMsg.extra[1].text : null;
            }
        }
	},
};