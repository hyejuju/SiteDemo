const mongoose = require('mongoose');

const britishSchema =new mongoose.Schema({year:String, game:String, team:String});
const diceSchema =new mongoose.Schema({year:String, game:String, team:String});

mongoose.model('britishmodelname', britishSchema, 'britishdb');
mongoose.model('dicemodelname', britishSchema, 'dicedb');