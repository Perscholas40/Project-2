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

// Show all Students

function allStudents(){
    return studentsCollection.find()
}

// Create Student

const createStudents = (newStudent) => {
    return studentsCollection.create(newStudent)
}

// Replace Student

const replaceStudents = () => {
    return studentsCollection.findByIdAndUpdate()
}

// show single Student

const showStudents = (newStudent) => {
    return studentsCollection.findById(newStudent)
}

// delete student

const deleteStudents = (newStudent) => {
    return studentsCollection.findByIdAndDelete(newStudent)
}

module.exports = {
    allStudents,
    createStudents,
    replaceStudents,
    showStudents,
    deleteStudents
};




