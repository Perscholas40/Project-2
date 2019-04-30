const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;


// Created Schema and Model

const studentsSchema = new Schema ({
    Name: String,
    Instrument: String,
    School: String,
    Age: Number
});

let studentsCollection = mongoose.model('Students', studentsSchema)

// Show all Instructors

const allStudents = () => {
    return studentsCollection.find()
}

// Create

const createStudents = () => {
    return studentsCollection.create()
}

// Replace

const replaceStudents = () => {
    return studentsCollection.findByIdAndUpdate()
}

// show single donor 

const showStudents = () => {
    return studentsCollection.findById()
}

// delete

const deleteStudents = () => {
    return studentsCollection.findByIdAndDelete()
}

module.exports = {
    allStudents,
    createStudents,
    replaceStudents,
    showStudents,
    deleteStudents
};




module.exports = mongoose.model('students',studentsSchema);
