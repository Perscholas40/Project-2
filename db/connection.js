// const mongoose = require('mongoose')

// const dbConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/Project-2'
// mongoose.connect(dbConnection, { useNewUrlParser: true})
//  .then(() => {
//   console.log("mongo is working");
//  })


// module.exports = mongoose;

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
  }
  else {
    mongoose.connect('mongodb://localhost/express-movies');
  }
  mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
    }
  );
  mongoose.connection.once('open', function() {
    console.log("Mongoose has connected to MongoDB!");
  });