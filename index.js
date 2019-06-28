const categories = require('./routes/categories');
const expenses = require('./routes/expenses');
const report = require('./routes/report');
const users = require('./routes/users');

const express = require('express');

require("./startup/db")()

const app = express();


app.use(express.json());
app.use('/api/categories', categories);
app.use('/api/expenses', expenses);
app.use('/api/report', report);
app.use('/api/users', users);



const port = process.env.PORT || 3000;

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;