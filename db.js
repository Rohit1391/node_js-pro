const mongoose= require('mongoose');
const mongoURL= 'mongodb://127.0.0.1:27017/hotels';
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