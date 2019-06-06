const { Expense } = require('../models/expense');
const { Categorie } = require('../models/categorie');

const { validateInputsExpenses } = require('../helpers/validationes');

const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
    const allExpenses = await Expense.find();
    res.send(allExpenses);

});

route.pos('/', async (req, res) => {
    const { error } = validateInputsExpenses(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    };

    const categorie = await Categorie.findById(req.body.categorieId);

    if (!categorie) {
        return res.status(400).send("Invalid categorie ");
    }

    const expense = new Expense({
        date: req.body.date,
        categorie: {
            _id: categorie._id,
            name: categorie.name
        },
        total: req.body.total,
        comments: req.body.comments
    })
    await expense.save();

    res.send(expense);


})


