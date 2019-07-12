const categories = require('./routes/categories');
const expenses = require('./routes/expenses');
const report = require('./routes/report');
const users = require('./routes/users');
const auth = require('./routes/auth');
const express = require('express');


const app = express();

require("./startup/db")();
require('./startup/cors')(app);
require('./startup/prod')(app);

app.use(express.json());
app.use('/api/categories', categories);
app.use('/api/expenses', expenses);
app.use('/api/report', report);
app.use('/api/users', users);
app.use('/api/auth', auth);




const port = process.env.PORT || 3000;

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;