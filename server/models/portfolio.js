const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setStringType = (maxLength) => ({ type: String, required: true, maxlength: maxLength })

const portfolioSchema = new Schema({
    userId: setStringType(512),
    title: setStringType(256),
    type: setStringType(256),
    programmingLanguage: setStringType(128),
    database: setStringType(128),
    description: setStringType(4096),
    picture1: setStringType(256),
    picture2: setStringType(256),
    picture3: setStringType(256),
    picture4: setStringType(256),
    videoURL: setStringType(256),
    dateAdded: {type: Date, required: true}
});

module.exports = mongoose.model('Portfolio', portfolioSchema);