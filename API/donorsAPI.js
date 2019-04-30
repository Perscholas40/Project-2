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

const createDonor = () => {
    return donorCollection.create()
}

// replace donor

const replaceDonor = () => {
    return donorCollection.findByIdAndUpdate()
}

// show single donor 

const showDonor = () => {
    return donorCollection.findById()
}

// delete donor

const deleteDonor = () => {
    return donorCollection.findByIdAndDelete()
}

module.exports = {
    allDonors,
    createDonor,
    replaceDonor,
    showDonor,
    deleteDonor
};
