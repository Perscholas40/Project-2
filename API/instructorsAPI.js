const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;


// Created Schema and Model

const instructorsSchema = new Schema ({
    Name: String,
    Organization: String,
    Instrument: String,
    
});

let instructorsCollection = mongoose.model('Instructors', instructorsSchema)

// Show all Instructors

const allInstructors = () => {
    return instructorsCollection.find()
}

// Create

const createInstructors = () => {
    return instructorsCollection.create()
}

// Replace

const replaceInstructors = () => {
    return instructorsCollection.findByIdAndUpdate()
}

// show single donor 

const showInsructors = () => {
    return instructorsCollection.findById()
}

// delete

const deleteInstructors = () => {
    return instructorsCollection.findByIdAndDelete()
}

module.exports = {
    allInstructors,
    createInstructors,
    replaceInstructors,
    showInsructors,
    deleteInstructors
};
