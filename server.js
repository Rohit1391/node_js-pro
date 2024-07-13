const express= require('express');
const app=express();
const db=require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
 
const Person= require('./models/Person');
const MenuItems = require('./models/MenuItems');
PORT = 3000;
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
