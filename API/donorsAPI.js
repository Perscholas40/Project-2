const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;


// Created Schema and Model

const donorSchema = new Schema ({
    Name: String,
    Organization: String,
    Instrument: String,
    Amount: Number
});

let donorCollection = mongoose.model('Donors', donorSchema)

// Show all donors

const allDonors = () => {
    return donorCollection.find()
}

// Create donors

const createDonors = () => {
    return donorCollection.create()
}

// replace donor

const replaceDonors = () => {
    return donorCollection.findByIdAndUpdate()
}

// show single donor 

const showDonors = () => {
    return donorCollection.findById()
}

// delete donor

const deleteDonors = () => {
    return donorCollection.findByIdAndDelete()
}

module.exports = {
    allDonors,
    createDonors,
    replaceDonors,
    showDonors,
    deleteDonors
};
