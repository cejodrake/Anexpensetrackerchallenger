const { User } = require('../models/user');

const { validateUser } = require('../helpers/validationes');
const asyncMiddleware = require('../middleware/async');

const express = require('express');
const router = express.Router();


router.post('/', asyncMiddleware(async (req, res) => {

    const { error } = validateUser(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    return res.status(200).send();

}));


module.exports = router;