const Rooms = require('../models/Rooms')


//Route for creating Rooms 
//api/v1/rooms/new
exports.createRoom = async(req, res, next) => {
    Rooms.create(req.body,(err, room) => {
        if(err)res.status(500).send(err)
        else{
            res.status(201).json({success: true, room})
        }
    })
}

//Route for getting Rooms 
//api/get/rooms/sync
exports.getRooms = async(req, res, next) => {
    Rooms.find((err, room) => {
        if(err)res.status(500).send(err)
        else{
            res.status(200).json({success: true, room})
        }
    })
}

//Route for getting Rooms 
//api/get/rooms/sync/:id
exports.getRoomById = async(req, res, next) => {
    Rooms.findById(req.params.id,(err, room) => {
        if(err)res.status(500).send(err)
        else{
            res.status(200).json({success: true, room})
        }
    })
}