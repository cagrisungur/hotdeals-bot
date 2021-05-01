require('dotenv').config();

const discord = require('discord.js');
const webhookClient = new discord.WebhookClient(process.env.WEBHOOK_ID, process.env.WEBHOOK_TOKEN);

const sendMessage = {
    messageSender(title, url) {
        const embed = new discord.MessageEmbed()
            .setTitle(title)
            .setURL(url)
            .setColor('#0099ff');

        webhookClient.send(process.env.BOT_MESSAGE, {
            username: process.env.BOT_NAME,
            avatarURL: process.env.BOT_AVATAR,
            embeds: [embed],
            files: [
                "./images/sicak.png"
            ]
        });
    }
}

module.exports = sendMessage;