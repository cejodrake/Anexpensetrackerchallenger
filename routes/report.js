const { Expense } = require('../models/expense');
const moment = require('moment');
const asyncMiddleware = require('../middleware/async');
const { validateInputsExpenses } = require('../helpers/validationes');

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {

    let dateInitial = moment(req.body.dateInitial);
    let now = moment(new Date());

    let dateComparation = dateInitial.diff(now, 'day');
    console.log(dateInitial + " ---" + now);

    console.log(dateComparation);

    if (dateComparation < 0)
        return res.status(400).send('Date Initial is less than date now');

    return res.status(200).send();

})

module.exports = router;