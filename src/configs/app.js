require('dotenv').config()

module.exports = {
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbUser: process.env.DB_USER,
    dbPass: process.env.DB_PASS,
    dbName: process.env.DB_DATABASE,
    apiVersion: process.env.API_VERSION || 1,
    serverPort: process.env.SERVER_PORT || 3001
}