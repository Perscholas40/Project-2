const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;


// Created Schema and Model

const instructorsSchema = new Schema ({
    Name: String,
    Instrument: String,
    Years: Number,  
});

let instructorsCollection = mongoose.model('Instructors', instructorsSchema)

// Show all Instructors

const allInstructors = () => {
    return instructorsCollection.find()
}

// Create

const createInstructors = (newInstructor) => {
    return instructorsCollection.create(newInstructor)
}

// Replace

const replaceInstructors = (x, y) => {
    return instructorsCollection.findByIdAndUpdate(x, y)
}

// show single donor 

const showInstructors = (newInstructor) => {
    return instructorsCollection.findById(newInstructor)
}

// delete

const deleteInstructors = (newInstructor) => {
    return instructorsCollection.findByIdAndDelete(newInstructor)
}

module.exports = {
    allInstructors,
    createInstructors,
    replaceInstructors,
    showInstructors,
    deleteInstructors
};
