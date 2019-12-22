const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {type: String, required: true},
    level: {type: String, required: true},
    subject: {type: String, required: true},
    address: {type: String, required: true},
    description: {type: String, required: true},
    location:{
        lat: {type: Number, required: true},
        lng: {type: Number, required: true},
    },
}
    
);

module.exports = mongoose.model('Student',studentSchema);