const mongoose = require('mongoose');

const britishModel = mongoose.model('britishmodelname');

const winnerlist = function (req,res) {
    britishModel.find({}, function(err, winners){
        if (err){
            res.status(404).json(err);
        }
        else{
            res.status(200).json(winners);
        }
    });
};

const addWinner = function (req,res) {
    //res.status(201).json({"Add winner" : "Work in progress"});
    britishModel.create(req.body, function(err, newWinner){
            if (err){
                res.status(400).json(err);
            }
            else{
                res.status(201).json(newWinner);
            }
        }
    );
};


module.exports = {
    winnerlist,
    addWinner
};