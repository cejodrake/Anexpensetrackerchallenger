const { Categorie } = require('../models/categorie');
const { validateInputsCategories } = require('../helpers/validationes');
const asyncMiddleware = require('../middleware/async');

const express = require('express');
const router = express.Router();

router.get('/', asyncMiddleware(async (req, res) => {
    const categories = await Categorie.find().sort('name');

    res.status(200).send(categories);

}));

router.post('/', asyncMiddleware(async (req, res) => {

    const { error } = validateInputsCategories(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const categorie = new Categorie({
        name: req.body.name
    });

    await categorie.save();


    res.status(200).send(categorie);

}));

module.exports = router;