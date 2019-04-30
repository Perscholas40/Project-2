const mongoose = require ('mongoose');

// Connect to mongodb

// Register DB Connection

mongoose.connect("mongodb://localhost/register", {useNewUrlParser:true}).then(()=>{
    console.log ("Connected to MongoDB")
})



module.exports = mongoose