const express = require('express');
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')


module.exports = (app) => {
    app.set('trust proxy', 1);
    app.use(rateLimiter({
        windowMs: 15 * 60 * 1000, //15 minutes
        max: 100, //limit each IP to 100 request per windowMs
    })
    );
    app.use(express.json());
    app.use(helmet())
    app.use(cors())
    app.use(xss())
}