const mongoose = require("../db/connection");
const Schema = mongoose.Schema;


// Created Schema and Model

const donorSchema = new Schema ({
    Name: String,
    Organization: String,
    Instrument: String,
    Amount: Number
});



module.exports = mongoose.model('donor', donorSchema);
