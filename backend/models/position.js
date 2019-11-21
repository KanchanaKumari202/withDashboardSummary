const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    position: { type: String, required: true },
    jobSummery: { type: String, required: true },
    jobDescription: { type: String, required: true },
    openings:{type:String}


});

module.exports = mongoose.model('Positions', postSchema)