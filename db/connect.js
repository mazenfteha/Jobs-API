const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Successfully connected')
  }).catch(() => {
    console.error('Failed to connect to the database')
    process.exit(1)
  })
}

module.exports = connectDB
