# About
This project made for scraping one of the most popular forum site hot deals and pushing notifications via webhook to discord.
- It cannot be used for commercial purposes. Responsibility belongs to you.
## Techs
- [Puppeteer](https://pptr.dev/) - Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium.
- [node.js](https://nodejs.org/en/) - evented I/O for the backend
- [Knex](http://knexjs.org/) - Knex.js (pronounced /kəˈnɛks/) is a "batteries included" SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift designed to be flexible, portable, and fun to use
- [Node Schedule](https://www.npmjs.com/package/node-schedule) - Node Schedule is a flexible cron-like and not-cron-like job scheduler for Node.js. It allows you to schedule jobs (arbitrary functions) for execution at specific dates, with optional recurrence rules. It only uses a single timer at any given time (rather than reevaluating upcoming jobs every second/minute).
- [Selenium](https://www.selenium.dev/) -Primarily it is for automating web applications for testing purposes, but is certainly not limited to just that.
- [Discord.js](https://discord.js.org/#/) -discord.js is a powerful node.js module that allows you to interact with the Discord API very easily. It takes a much more object-oriented approach than most other JS Discord libraries, making your bot's code significantly tidier and easier to comprehend.

## Future Updates

- Telegram Message
- Amazon daily deals

## Usage

```sh
git clone https://github.com/cagrisungur/hotdeals-discord-bot
cd /hotdeals-discord-bot
npm install
```
Do not forget to set your own `.env` file. If you need the discord notification go to your discord app get your own webhook tokens.

Then;

```sh
knex migrate:latest
```

There are two commands available for cli.

##### Headless mode
This will run chromium with headless mode.
```sh
npm run start -- --headless
```
##### Notification Enable (discord)
```sh
npm run start -- --notification
```
And both
```sh
npm run start -- --headless --notification
```
Note: I'm hardly suggest, start bot at first without notification, so there will be tons of subject at forum, if you don't want to spam notifications instantly.

## Development
Feel free to pull requests.

