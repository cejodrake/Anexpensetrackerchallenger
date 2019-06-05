const { categories, validate } = require('../models/categorie');

const asyncMiddleware = require('../middleware/async');
const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.send(categories);
});

module.exports = router;