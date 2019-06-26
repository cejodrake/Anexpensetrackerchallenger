const mongoose = require('mongoose')


const userSchem = new mongoose.Schema({

    name: {
        type: String,
        require: true,
        minlength: 2,
        maxlength: 50,

    },
    email: {
        type: String,
        require: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minlength: 5,
        maxlength: 1024
    },
    isAdmin: Boolean
});

const User = mongoose.model("User", userSchem);

exports.User = User;