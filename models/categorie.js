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

function validateCategories(categorie) {
    const schema = {
        name: Joi.string().min(5).max(50).required()
    };
    return Joi.validate(categorie, schema);

}

exports.Categorie = Categorie;
exports.validate = validateCategories;
exports.categorieSchema = categorieSchema;