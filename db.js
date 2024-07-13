const mongoose= require('mongoose');
//const mongoURL= MONGODB_URL_LOCAL;

require ('dotenv').config();
const mongoURL = process.env.MONGODB_URL;
mongoose.connect(mongoURL,{
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})

const db= mongoose.connection;
db.on('connected', () => {
    console.log('connected to MongoDb server');
})

db.on('error', () => {
    console.log('MongoDb connection error');
})

db.on('disconnected', () => {
    console.log('MongoDb disconnected');
})

module.exports=db;