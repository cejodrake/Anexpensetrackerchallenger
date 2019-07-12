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

userSchem.methods.generateAuthToken = function () {
    const token = jwt.sign(
        {
            _id: this._id,
            name: this.name,
            email: this.email,
            isAdmin: this.isAdmin
        },

    );
    return token;
}
const User = mongoose.model("User", userSchem);

exports.User = User;