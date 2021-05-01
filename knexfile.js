require('dotenv').config();

module.exports = {
    client: 'mysql',
    connection: {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    },
    migrations: {
        directory: './db/migrations'
    }
};
