const Joi = require('joi');
const categories = require('./routes/categories');
const express = require('express');
require("./startup/db")()
    ;
const app = express();


app.use(express.json());
app.use('/api/categories', categories);


const port = process.env.PORT || 3000;

const server = app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = server;