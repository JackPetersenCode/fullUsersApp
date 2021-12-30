const api = require('./db');

module.exports = {
    development: {
        client: "postgresql",
        connection: {
            host: 'localhost',
            port: 5432,
            user: 'me',
            password: 'postgres',
            database: 'api'
        },
        migrations: {
            directory: __dirname + "/migrations"
        },
        seeds: {
            directory: __dirname + "/seeds"
        }
    }
}