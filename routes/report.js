const { Expense } = require('../models/expense');
const moment = require('moment');
const asyncMiddleware = require('../middleware/async');
const { validateInputsExpenses } = require('../helpers/validationes');

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {

    let dateInitial = moment(req.body.dateInitial);
    let dateEnd = moment(req.body.dateEnd);


    if (!dateInitial.isValid()) return res.status(400).
        send('the format of date initial not is correct');

    if (!dateEnd.isValid()) return res.status(400)
        .send('the format of date end not is correct');

    let now = moment(new Date());

    let dateComparationInitial = dateInitial.diff(now, 'day');
    let dateComparationEnd = dateEnd.diff(now, 'day');


    if (dateComparationInitial < 0) {
        return res.status(400).send('Date inital not valid');
    };

    if (dateComparationEnd < 0) {
        return res.status(400).send('Date end not valid ');
    }

    return res.status(200).send();

})

module.exports = router;