const browserObject = require('./browser');
const scraperController = require('./pageController');
var schedule = require('node-schedule');

console.log('gg')


schedule.scheduleJob('*/5 * * * * *', function(){  // this for one hour
    let browserInstance = browserObject.startBrowser();
    scraperController(browserInstance)
});
