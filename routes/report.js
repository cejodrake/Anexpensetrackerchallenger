const { Expense } = require('../models/expense');
const moment = require('moment');
const asyncMiddleware = require('../middleware/async');
const { validationesFormatDate, validateDateEndLessDateInitial } = require('../helpers/validationes');

const express = require('express');
const router = express.Router();

router.get('/', asyncMiddleware(async (req, res) => {

    let dateInitial = moment(req.body.dateInitial);
    let dateEnd = moment(req.body.dateEnd);

    if (validateDateEndLessDateInitial(dateInitial, dateEnd))
        return res.status(400).send('Date End is less than Date Initial');

    if (!validationesFormatDate(dateInitial, dateEnd))
        return res.status(400).send('Some Field date is not Correct Format');


    return res.status(200).send();

}));

module.exports = router;