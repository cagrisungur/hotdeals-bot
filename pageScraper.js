const knex = require('./db/db')
const discordMessageSender = require('./discord-bot');

const scraperObject = {
    url: 'https://forum.donanimhaber.com/forumid_193/tt.htm',
    async scraper(browser, argv){
        let page = await browser.newPage();
        console.log(`Linke gidiliyor ${this.url}...`);

        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36');

        await page.goto(this.url);

        await page.waitForSelector('.yenikonu')

        const data = await page.$$eval('.yenikonu > .kl-konu', subject => {
            let valueArray = [];

            let subjects = subject.map(el => el.querySelector('a').href);
            let titles = subject.map(el => el.querySelector('a[title]').innerText)

            var i;

            for (i = 0; i < subjects.length; i++) {
                if (!titles[i].includes("Sponsorlu") && !titles[i].includes('Sabit Konu')) {
                    let subject = subjects[i];
                    let title = titles[i];
                    valueArray.push({'url': subject, 'title': title})
                }
            }
            return valueArray;
        });

        await data.forEach(function(item){
            knex('subject')
                .select()
                .where('title', item.title)
                .then(function(rows) {
                    if (rows.length === 0) {
                        if (typeof argv !== "undefined") {
                            if (argv) {
                                discordMessageSender.messageSender(item.title,item.url)
                            }
                        }
                        return knex('subject').insert({'title': item.title, url: item.url})
                    }
                })
                .catch(function(ex) {
                    console.log(ex)
                })
        });

        await browser.close();
    }
}

module.exports = scraperObject;