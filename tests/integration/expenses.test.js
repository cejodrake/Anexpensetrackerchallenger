const request = require('supertest');
const mongoose = require('mongoose')
const { Expense } = require('../../models/expense');
const app = require('../../index');


describe('/api/expenses', () => {
    let server;
    let expense;
    let date;
    let categorieId;
    let total;

    const info = () => {
        return request(server).post('/api/expenses').send({ date, categorieId, total });

    };

    beforeEach(async () => {
        server = require(app);
        categorieId = mongoose.Types.ObjectId();

        expense = new Expense({

        })
    })
})
