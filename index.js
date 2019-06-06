const Joi = require('joi');
const categories = require('./routes/categories');
const expenses = require('./routes/expenses');
const express = require('express');
require("./startup/db")()

const app = express();


app.use(express.json());
app.use('/api/categories', categories);
app.use('/api/expenses', expenses);


const port = process.env.PORT || 3000;

const server = app.listen(port, () => console.log(`Listening on port ${port} ${port.env}...`));

module.exports = server;