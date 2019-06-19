const moment = require('moment');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);


const validateInputsExpenses = (expense) => {

    const schema = {
        categorieId: Joi.objectId().required(),
        total: Joi.number().min(0).required(),
        comments: Joi.string().max(50),
        date: Joi.date().required()
    };

    return Joi.validate(expense, schema);
}

const validateInputsCategories = (categorie) => {

    const schema = {
        name: Joi.string().min(5).max(50).required()
    };
    return Joi.validate(categorie, schema);

}

const validationesFormatDate = (dateInitial, dateEnd) => {

    return dateInitial.isValid() || dateEnd.isValid();
}


module.exports.validationesFormatDate = validationesFormatDate;
module.exports.validateInputsExpenses = validateInputsExpenses;
module.exports.validateInputsCategories = validateInputsCategories;


