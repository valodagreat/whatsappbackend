const express = require('express');
//const dotenv = require('dotenv');
const db = require('./config/db');
const mongoSanitize = require('express-mongo-sanitize')
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const colors = require('colors');
const {pusher} =require('./middlewares/pusher')
const message = require('./routes/Messages')
const room = require('./routes/Room');

const app = express();
//dotenv.config({path : './config/config.env'});

db();

app.use(express.json());

//sanitize data
app.use(mongoSanitize());

//set security headers
app.use(helmet());

//Prevent xss attack
app.use(xss());

//Enable Cors
app.use(cors());

//Prevent http param pollution
app.use(hpp());

pusher();

app.use('/api/v1',message);
app.use('/whatsapp',room);

app.get('/', (req, res) =>res.send('it is working'))

const port = process.env.PORT || 9000

app.listen(port, () => {
    console.log(`App listening on port ${port}!`.yellow);
});