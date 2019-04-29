const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Created Schema and Model

const donorSchema = new Schema ({
    name: String,
    Organization: String,
    Instrument: String,
});