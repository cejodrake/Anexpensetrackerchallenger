const mongoose = require('mongoose');
const Joi = require('joi');

const categorieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
});

const Categorie = mongoose.model('Categories', categorieSchema);

exports.Categorie = Categorie;
exports.categorieSchema = categorieSchema;