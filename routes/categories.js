const { Categorie, validate } = require('../models/categorie');

const asyncMiddleware = require('../middleware/async');
const express = require('express');
const router = express.Router();

router.get('/', asyncMiddleware(async (req, res) => {
    const categories = await Categorie.find().sort('name');
    res.send(categories);

}));

router.post('/', asyncMiddleware(async (req, res) => {

    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const categorie = new Categorie({
        name: req.body.name
    });

    await categorie.save();

    res.send(categorie);

}));

module.exports = router;