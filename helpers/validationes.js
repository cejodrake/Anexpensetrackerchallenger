
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);


const validateUser = (user) => {

    const schema = {
        name: Joi.string().min(2).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()


    };
    return Joi.validate(user, schema);
}

const validateInputsExpenses = (expense) => {

    const schema = {
        categorieId: Joi.objectId().required(),
        total: Joi.number().min(0).required(),
        comments: Joi.string().max(50),
        date: Joi.date().required(),
        email: Joi.string().required()
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

    return dateInitial.isValid() && dateEnd.isValid() ? true : false;
}


const validateDateEndLessDateInitial = (dateInitial, dateEnd) => {

    var d1 = new Date(dateInitial);
    var d2 = new Date(dateEnd)
    return d2.getTime() < d1.getTime() ? true : false;

}

module.exports.validateDateEndLessDateInitial = validateDateEndLessDateInitial;
module.exports.validationesFormatDate = validationesFormatDate;
module.exports.validateInputsExpenses = validateInputsExpenses;
module.exports.validateInputsCategories = validateInputsCategories;
module.exports.validateUser = validateUser;


