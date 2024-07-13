const mongoose =require('mongoose');
const menuSchema = new mongoose.Schema({
    name :{
        type: String
    },
    ingredients: {
    type: [String]
    },
    taste:{
        type: String,
        enum: ['spicy', 'sweet', 'sour']
    }
});

const MenuItems= mongoose.model('MenuItems', menuSchema);
module.exports = MenuItems;