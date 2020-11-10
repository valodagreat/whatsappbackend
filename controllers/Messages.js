const Message = require('../models/Messages')
const Rooms = require('../models/Rooms')


//Route for creating messages 
//api/v1/messages/new/:id
exports.createMessage = async(req, res, next) => {
    req.body.room = req.params.id
    Rooms.findById(req.params.id,(err, message) => {
        if(err)res.status(500).send(err)
        else if(message){
            Message.create(req.body,(err, message) => {
                if(err)res.status(500).send(err)
                else{
                    res.status(201).json({success: true, message})
                }
            })
        }
    })
    /**/
}

//Route for getting messages 
//api/v1/messages/sync
exports.getMessages = async(req, res, next) => {
    Message.find((err, message) => {
        if(err)res.status(500).send(err)
        else{
            res.status(200).json({success: true, message})
        }
    })
}

//Route for getting messages by room id
//api/v1/messages/sync/:id
exports.getMessagesById = async(req, res, next) => {
    Message.find({room : req.params.id},(err, message) => {
        if(err)res.status(500).send(err)
        else{
            res.status(200).json({success: true, message})
        }
    })
}