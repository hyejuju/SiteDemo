const request = require('request');
const apiURL = require('./apiURLs');

const showForm = function(req,res) {
    res.render('dice_add');
    res.render('dice_delete');//??from pug file
};

const addData = function(req,res) {
    const path = '/api/dice';

    const postdata = {
        year: req.body.year,
        game: req.body.game,
        team: req.body.team
    };
    const requestOptions = {
        url : apiURL.server + path,
        method: 'POST',
        json : postdata
    };

    request(
        requestOptions,
        function (err,response) {
            if (response.statusCode === 201) {
                res.redirect('/dice');
            }
            else {
                res.render('error', {message: 'Error adding data: '+
                response.statusMessage +
                ' ('+ response.statusCode + ')' });
            }
        }
    );
};

//deleting
const deleteData = function(req,res) {
    const path = '/api/dice';

    const removedata = {
        year: req.body.year,
        game: req.body.game,
        team: req.body.team
    };
    const requestOptions = {
        url : apiURL.server + path,
        method: 'DELETE',
        json : removedata
    };

    request(
        requestOptions,
        function (err,response) {
            if (response.statusCode === 201) {
                res.redirect('/dice');
            }
            else {
                res.render('error', {message: 'Error deleting data: '+
                        response.statusMessage +
                        ' ('+ response.statusCode + ')' });
            }
        }
    );
};

const winnerlist = function(req, res){
    const path = '/api/dice';
    const requestOptions = {
        url : apiURL.server + path,
        method : 'GET',
        json : {},
        qs : {}
    };

    request(
        requestOptions,
        function (err, response, body) {
            if (err) {
                res.render('error', {message: err.message});
            }
            else if (response.statusCode !== 200){
                res.render('error', {message: 'Error accessing API: ' + response.statusMessage + " ("+ response.statusCode + ")" });
            }
            else if (!(body instanceof Array)) {
                res.render('error', {message: 'Unexpected response data'});
            }
            else if (!body.length){
                res.render('error', {message: 'No dicuments in collection'});
            }
            else {
                res.render('dice', {winners: body});
            }
        }
    );

};




module.exports = {
    winnerlist,
    showForm,
    addData,
    deleteData

};