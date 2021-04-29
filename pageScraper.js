const knex = require('knex')({
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : '',
        database : 'hotdeals'
    }
});

const discordMessageSender = require('./discord-bot');

const scraperObject = {
    url: 'https://forum.donanimhaber.com/forumid_193/tt.htm',
    async scraper(browser){
        // const knex = require('./db/db');
        let page = await browser.newPage();
        console.log(`Linke gidiliyor ${this.url}...`);
        await page.goto(this.url);

        await page.waitForSelector('.yenikonu')

        var data = await page.$$eval('.yenikonu > .kl-konu', subject => {
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

        data.forEach(function(item){
            knex('subject')
                .select()
                .where('title', item.title)
                .then(function(rows) {
                    if (rows.length === 0) {
                        discordMessageSender.messageSender(item.title,item.url)
                        return knex('subject').insert({'title': item.title, url: item.url})
                    }
                })
                .catch(function(ex) {
                    console.log(ex)
                })
        });

    }
}


module.exports = scraperObject;