const mongoose = require('mongoose')
​
const dbConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/Project-2'
mongoose.connect(dbConnection, { useNewUrlParser: true})
 .then(() => {
  console.log("mongo is working");
 })
​
module.exports = mongoose;