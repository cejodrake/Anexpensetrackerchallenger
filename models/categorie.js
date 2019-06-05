const mongoose = requier('mongoose');
const Joi = require('joi');

const categorieSchema = new mongoose.genreSchema({
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

exports.categorie = Categorie;
exports.validate = validateCategories;
exports.categorieSchema = categorieSchema;