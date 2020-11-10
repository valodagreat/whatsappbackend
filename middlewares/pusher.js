const mongoose = require('mongoose');
const Pusher = require("pusher");

const pusher = new Pusher({
    appId: "1101088",
    key: "c749c0a525d952c26b14",
    secret: "2956957823e44b3c21af",
    cluster: "eu",
    useTLS: true
});

const db = mongoose.connection

exports.pusher = () => {
    db.once('open', () => {
    console.log("Database connected".cyan);

    const roomcollection = db.collection('rooms');

    const roomchangestream = roomcollection.watch();


    roomchangestream.on('change',(change)=>{
        if(change.operationType === "insert"){
            const roomdetails = change.fullDocument;
            pusher.trigger('room', 'inserted',{
                name : roomdetails.name,
                _id : roomdetails._id,
            });
        }else{
            console.log("Error triggering pusher".red)
        }
    })



    const msgcollection = db.collection('messages');
    const changestream = msgcollection.watch();

    changestream.on('change',(change)=>{
        if(change.operationType === "insert"){
            const msgdetails = change.fullDocument;
            pusher.trigger('message', 'inserted',{
                name : msgdetails.name,
                message : msgdetails.message,
                timestamp : msgdetails.timestamp,
                received : msgdetails.received,
                _id : msgdetails._id,
            });
        }else{
            console.log("Error triggering pusher".red)
        }
    })
})
}
