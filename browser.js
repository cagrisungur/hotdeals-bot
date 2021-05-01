const puppeteer = require('puppeteer');

async function startBrowser(isHeadless){
    let browser;
    let headlessMode;

    headlessMode = !!isHeadless;

    try {
        console.log("Opening browser");
        browser = await puppeteer.launch({
            headless: headlessMode,
            args: ["--disable-setuid-sandbox"],
            'ignoreHTTPSErrors': true
        });
    } catch (err) {
        console.log("Error => : ", err);
    }
    return browser;
}

module.exports = {
    startBrowser
};