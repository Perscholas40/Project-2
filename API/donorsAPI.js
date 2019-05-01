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

const createDonors = (newDonor) => {
    return donorCollection.create(newDonor)
}

// replace donor

const replaceDonors = (newDonor) => {
    return donorCollection.findByIdAndUpdate(newDonor)
}

// show single donor 

const showDonors = (newDonor) => {
    return donorCollection.findById(newDonor)
}

// delete donor

const deleteDonors = (newDonor) => {
    return donorCollection.findByIdAndDelete(newDonor)
}

module.exports = {
    allDonors,
    createDonors,
    replaceDonors,
    showDonors,
    deleteDonors
};
