const { Expense } = require('../models/expense');
const { Categorie } = require('../models/categorie');
const { User } = require('../models/user');
const asyncMiddleware = require('../middleware/async');

const { validateInputsExpenses } = require('../helpers/validationes');


const express = require('express');
const router = express.Router();


router.get('/', asyncMiddleware(async (req, res) => {
    const allExpenses = await Expense.find();

    if (allExpenses) return res.status(200).send(allExpenses);

    return res.status("400").send("Ups we can't get information!! please contact Admin ");

}));

router.post('/', asyncMiddleware(async (req, res) => {

    const { error } = validateInputsExpenses(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    };

    const categorie = await Categorie.findById(req.body.categorieId);

    if (!categorie) {
        return res.status(400).send("Invalid categorie ");
    }

    const expense = createExpense(req, categorie);

    await expense.save();

    res.status(200).send(expense);

}));


function createExpense(req, categorie) {
    return new Expense({
        date: req.body.date,
        categorie: {

            _id: categorie._id,
            name: categorie.name
        },
        total: req.body.total,
        comments: req.body.comments,
        email: req.body.email

    })


}

module.exports = router;