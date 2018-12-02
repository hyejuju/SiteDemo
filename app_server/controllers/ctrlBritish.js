const request = require('request');
const apiURL = require('./apiURLs');

const winnerlist = function(req, res){
    const path = '/api/british';//is it british??
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
                res.render('british', {winners: body});//is it british
            }
        }
    );
  /*  res.render('british',{
        winners:
        [
            {year:'2010', game:'Mass Effect 2', team: 'BioWare'},
            {year:'2011', game:'Portal 2', team: 'Valve Corporation'},
            {year:'2012', game:'Dishonored', team: 'Arkane Studios'},
            {year:'2013', game:'The Last of US', team: 'Naughty Dog'},
            {year:'2014', game:'Destiny', team: 'Bungie'},
            {year:'2015', game:'Fallout 4', team: 'Bethesda Game Studios'},
            {year:'2016', game:'Uncharted 4: A Thiefs End', team: 'Naughty Dog'},
            {year:'2017', game:'What Remains of Edith Finch', team: 'Giant Sparrow'}
        ]});*/
};

module.exports = {
    winnerlist
};