const Joi = require('joi');

module.exports = function validateInputsExpenses(expense) {

    const schema = {
        categorie: Joi.objectId().require(),
        total: Joi.number().min(0).required()
    };

    return Joi.validate(expense, schema);

}