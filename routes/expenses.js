const { Expense, validate } = require('../models/expense');
const { Categorie } = require('../models/categorie');
const asyncMiddleware = require('../middleware/async');


const express = require('express');
const router = express.Router();


router.get('/', asyncMiddleware(async (req, res) => {
    const allExpenses = await Expense.find();
    res.send(allExpenses);

}));

router.post('/', asyncMiddleware(async (req, res) => {
    const { error } = validate(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    };

    const categorie = await Categorie.findById(req.body.categorieId);

    if (!categorie) {
        return res.status(400).send("Invalid categorie ");
    }

    const expense = new Expense({
        date: new Date('2013-12-12T16:00:00.000Z'),
        categorie: {

            _id: categorie._id,
            name: categorie.name
        },
        total: req.body.total,
        comments: req.body.comments
    })
    await expense.save();

    res.send(expense);


}));

module.exports = router;