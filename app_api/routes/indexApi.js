const express = require('express');
const router = express.Router();

const ctrlApibritish = require('../controllers/ctrlApibritish');
const ctrlApidice = require('../controllers/ctrlApidice');

//british
router
    .route('/dice')
    .get(ctrlApibritish.winnerlist)
    .post(ctrlApibritish.addWinner)
    .delete(ctrlApidice.deleteWinner);

//dice
router
    .route('/british')
    .get(ctrlApidice.winnerlist)
    .post(ctrlApidice.addWinner)
    .delete(ctrlApidice.deleteWinner);


module.exports = router;
