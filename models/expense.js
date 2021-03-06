const mongoose = require('mongoose');
const { categorieSchema } = require('./categorie');


const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const Expense = mongoose.model('Expenses', new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    categorie: {
        type: categorieSchema,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    comments: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }

}))

exports.Expense = Expense;
