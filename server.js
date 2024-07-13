const express= require('express');
require ('dotenv').config();
const app=express();

const db=require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = 3000;
const Person= require('./models/Person');
const MenuItems = require('./models/MenuItems');

app.get('/', (req, res)=>{
    res.send('Hey everyone, this is me');
})

const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);
app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(`server is listening on port ${PORT}`);
    } 
});
