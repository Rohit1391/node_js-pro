const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');
router.post('/', async (req, res) =>{
    try{
        const data = req.body
    const newPerson =  new Person(data);
    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
    }
     catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
    
})

router.get('/', async (req, res) =>{
    try{
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

router.get('/:worktype', async(req, res)=>{
    try{
        const worktype= req.params.worktype;
    if(worktype=='chef' || worktype=='manager' || worktype=='waiter'){
        const response= await Person.find({work: worktype});
        console.log('response fetched');
        res.status(200).json(response);
    }else {
        res.status(404).json({error: 'Invalid worktype'});
    }
    } catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
});

router.put('/:id', async(req, res)=>{
    try{
        const personId = req.params.id;
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,
            runValidators: true
        })

        if(!response){
            return res.status(404).json({error: 'peson not found'});
        }
        console.log('data updated');
        res.status(200).json(response);
        } catch(err){
            console.log(err);
            res.status(500).json({error: 'Internal server error'});
        }
})

module.exports = router;