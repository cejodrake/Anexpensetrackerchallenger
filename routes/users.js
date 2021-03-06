const _ = require('lodash');
const bycrypt = require('bcrypt');
const { User } = require('../models/user');

const { validateUser } = require('../helpers/validationes');
const asyncMiddleware = require('../middleware/async');

const express = require('express');
const router = express.Router();


router.post('/', asyncMiddleware(async (req, res) => {

    const { error } = validateUser(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('User already registre in your Database');

    user = new User(_.pick(req.body, ["name", "email", "password"]))
    const salt = await (bycrypt.genSalt(10));
    user.password = await bycrypt.hash(user.password, salt);

    await user.save();


    return res.status(200).send(_.pick(user, ["_id", "name", "email"]));

}));


module.exports = router;