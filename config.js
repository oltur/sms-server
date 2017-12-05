'use strict'

module.exports = {
    name: 'rest-api',
    version: '0.0.1',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    db: {
        uri: 'mongodb://sms:Qwerty123@ds129936.mlab.com:29936/sms',
    }
}