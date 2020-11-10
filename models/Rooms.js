const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,'Please add a name'],
        trim : true,
        maxlength : [50, 'Name is too long'],
        unique : true
    }
})

module.exports = mongoose.model('rooms', RoomSchema);