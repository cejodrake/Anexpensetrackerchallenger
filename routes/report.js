const _ = require('lodash');
const { Expense } = require('../models/expense');
const { Categorie } = require('../models/categorie');
const moment = require('moment');
const asyncMiddleware = require('../middleware/async');
const { validationesFormatDate, validateDateEndLessDateInitial } = require('../helpers/validationes');

const express = require('express');
const router = express.Router();

const pipe =
    [
        {

            $group: {
                _id: "$categorie",
                total: { $sum: '$total' },
            }
        }
    ]


router.get('/', asyncMiddleware(async (req, res) => {

    let dateInitial = moment(req.body.dateInitial, "YYYY-MM-DD");
    let dateEnd = moment(req.body.dateEnd, "YYYY-MM-DD");

    if (validateDateEndLessDateInitial(dateInitial, dateEnd))
        return res.status(400).send('Date End is less than Date Initial');

    if (!validationesFormatDate(dateInitial, dateEnd))
        return res.status(400).send('Some Field date is not Correct Format');
    var pipeline = [

        {
            $match: {
                "date": {
                    $gte: dateInitial, $lte: dateEnd
                }
            }
        },

        {
            $group: {
                _id: "$categorie",
                total: { $sum: "$total" }
            }
        }
    ]
    const result = await Expense.aggregate(pipeline); /*await Expense.aggregate([
        {
            $group: {
                _id: "$categorie",
                total: { $sum: "$total" }
            },
        }
    ])*/

    console.log(result);

    console.log("fecha Inicial ---" + dateInitial + "fecha final --- :" + dateEnd)

    const allData = await Expense.find({
        date: { $gte: dateInitial, $lte: dateEnd }
    });

    console.log(dateInitial + dateEnd)


    return res.status(200).send(allData);

}));

module.exports = router;