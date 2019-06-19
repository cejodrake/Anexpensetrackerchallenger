const { Expense } = require('../models/expense');
const moment = require('moment');
const asyncMiddleware = require('../middleware/async');
const { validationesFormatDate } = require('../helpers/validationes');

const express = require('express');
const router = express.Router();

router.get('/', asyncMiddleware(async (req, res) => {

    let dateInitial = moment(req.body.dateInitial);
    let dateEnd = moment(req.body.dateEnd);

    if (!validationesFormatDate(req, res))
        return res.status(400).send('Some Field date is not Correct Format');

    let now = moment(new Date());

    let dateComparationInitial = dateInitial.diff(now, 'day');
    let dateComparationEnd = dateEnd.diff(now, 'day');


    if (dateComparationEnd < dateComparationInitial) {
        return res.status(400).send('Date end not valid ');
    }


    return res.status(200).send();

}));

module.exports = router;