const { Expense } = require('../models/expense');
const moment = require('moment');
const asyncMiddleware = require('../middleware/async');
const { validationesFormatDate, validateDateEndLessDateInitial } = require('../helpers/validationes');

const express = require('express');
const router = express.Router();

router.get('/', asyncMiddleware(async (req, res) => {

    let dateInitial = moment(req.body.dateInitial);
    let dateEnd = moment(req.body.dateEnd);

    if (!validationesFormatDate(dateInitial, dateEnd))
        return res.status(400).send('Some Field date is not Correct Format');


    if (validateDateEndLessDateInitial(dateInitial, dateEnd)) {
        return res.status(400).send('Date End should not be less than date Initial ');
    }

    return res.status(200).send();

}));

module.exports = router;