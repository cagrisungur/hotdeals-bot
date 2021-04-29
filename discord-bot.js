require('dotenv').config();

const discord = require('discord.js');
const webhookClient = new discord.WebhookClient(process.env.WEBHOOK_ID, process.env.WEBHOOK_TOKEN);

const sendMessage = {
    messageSender(title, url) {
        const embed = new discord.MessageEmbed()
            .setTitle(title)
            .setURL(url)
            .setColor('#0099ff');

        webhookClient.send('Yeni Sıcak Ufukta Belirdi \n', {
            username: 'Cagri The Sıcak Hunter',
            avatarURL: 'https://i.imgur.com/wpZFViD.png',
            embeds: [embed],
            files: [
                "./images/sicak.png"
            ]
        });
    }
}

module.exports = sendMessage;