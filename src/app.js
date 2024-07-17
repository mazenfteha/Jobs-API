require('dotenv-flow').config();
require('express-async-errors');
const express = require('express');
const app = express();


const connectDB =require('../db/connect')
const appIndex = require('./hooks/index.hooks')
const appSetup = require('./utils/app.setup')

appSetup(app)
appIndex(app)

const port = process.env.PORT || 80;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
