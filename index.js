const browserObject = require('./browser');
const scraperController = require('./pageController');
const schedule = require('node-schedule');

var argv = require('yargs/yargs')(process.argv.slice(2))
    .boolean(['headless', 'notification'])
    .argv
;

schedule.scheduleJob('*/10 * * * * *', function(){
    let browserInstance = browserObject.startBrowser(argv.headless);
    scraperController(browserInstance, argv.notification)
});
