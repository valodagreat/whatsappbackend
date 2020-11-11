const mongoose = require('mongoose');

const db = async() =>{ 
    const conn = await mongoose.connect(process.env.MONGO_URL,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
console.log(`MongoDB is connected to ${conn.connection.host}`)
}

module.exports=db;