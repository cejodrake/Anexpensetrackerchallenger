const { Expense } = require('../../models/expense');
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

    console.log("date final -> " + validateDateEndLessDateInitial(dateInitial, dateEnd));
    console.log("date string -> " + validationesFormatDate(dateInitial, dateEnd));

    const allExpenses = await Expense.find({ date: { $lt: dateInitial, $gte: dateEnd } });

    return res.status(200).send(allExpenses);

    return res.status(200).send();

}));

module.exports = router;