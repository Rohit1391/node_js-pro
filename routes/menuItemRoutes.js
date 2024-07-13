const express = require('express');
const router = express.Router();
const MenuItems = require('./../models/MenuItems');
router.post('/', async (req, res) =>{
    try{
        const data= req.body;
        const newMenu = new MenuItems(data);
        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

router.get('/', async(req, res)=>{
    try{
        const data= await MenuItems.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

router.get('/:tastetype', async(req, res)=>{
    try{
        const tastetype= req.params.tastetype;
    if(tastetype=='spicy' || tastetype=='sweet' || tastetype=='sour'){
        const response= await MenuItems.find({taste: tastetype});
        console.log('response fetched');
        res.status(200).json(response);
    }else {
        res.status(404).json({error: 'Invalid tastetype'});
    }
    } catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
});

module.exports = router;