const { Expense } = require('../models/expense');
const asyncMiddleware = require('../middleware/async');
const { validateInputsExpenses } = require('../helpers/validationes');

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {


    return res.status(200).send();

})

module.exports = router;