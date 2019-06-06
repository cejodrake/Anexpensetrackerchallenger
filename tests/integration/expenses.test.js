const request = require('supertest');
const mongoose = require('mongoose')
const { Expense } = require('../../models/expense');
const app = require('../../index');
let server;

describe('/api/expenses', () => {

    let expense;
    let dateTest = "2019-06-05";
    let categorieId;
    let totalTest = 100;



    const info = () => {
        return request(server).post('/api/expenses').send({ dateTest, categorieId, totalTest });

    };

    beforeEach(async () => {
        server = require('../../index');
        categorieId = mongoose.Types.ObjectId();

        expense = new Expense({
            date: dateTest,
            categorie: {
                _id: categorieId,
                name: "burger king"
            },
            total: totalTest
        });
        await expense.save();
    });

    afterEach(async () => {
        await server.close();
        await Expense.remove({});
    })

    it('should return error 400 if date if not provided from client ', async () => {
        dateTest = "f";
        const res = await info();
        expect(res.status).toBe(400);
    })
});
