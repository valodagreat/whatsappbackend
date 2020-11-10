const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    message : {
        type : String, 
        required : [true,"Please add a message"],
        minlength: 1,
    },
    name : {
        type : String,
        required : [true,'Please add a name'],
        trim : true,
        maxlength : [50, 'Name is too long']
    },
    timestamp : {
        type : Date,
        default : Date.now()
    },
    room : {
        type : mongoose.Schema.ObjectId,
        ref : 'Rooms',
        required : true
    }
})

module.exports = mongoose.model('messages', MessageSchema)