process.env["NTBA_FIX_319"] = 1
T = require('node-telegram-bot-api');
require('dotenv').config();

const accessToken = process.env.ACCESS_TOKEN;
const chatId = process.env.CHAT_ID;

const sendTelegramMessage = {
    sendTelegramMessage(url, title) {
        if (accessToken && chatId) {
            const bot = new T(accessToken, {polling: true});

            console.log('↗ trying to send telegram message');
            (async () => {
                const results = [];
                try {
                    results.push(
                        bot.sendMessage(chatId, title+"\n"+url)
                    );
                    console.log('✔ telegram message sent');
                } catch (error) {
                    console.log("✖ couldn't send telegram message", error);
                }
                await Promise.all(results);
            })();
        }
    }
}

module.exports =  sendTelegramMessage;