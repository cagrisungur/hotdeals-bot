const pageScraper = require('./pageScraper');

async function scrapeAll(browserInstance, argv){
    let browser;
    try{
        browser = await browserInstance;
        await pageScraper.scraper(browser, argv);
    }
    catch(err){
        console.log("Hata => ", err);
    }
}

module.exports = (browserInstance, argv) => scrapeAll(browserInstance, argv)