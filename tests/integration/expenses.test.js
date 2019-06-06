const request = require('supertest');
const mongoose = require('mongoose')
const { Expense } = require('../../models/expense');
const app = require('../../index');
let server;

describe('/api/expenses', () => {

    let expense;
    let dateTest = '2019-05-19';
    let categorieId;
    let commentsTest = " test one"
    let totalTest = 100;

    const info = () => {
        return request(server).post('/api/expenses').send({ dateTest, categorieId, totalTest, commentsTest });

    };

    beforeEach(async () => {
        server = require('../../index');
        categorieId = mongoose.Types.ObjectId();

        expense = new Expense({

            categorie: {
                _id: categorieId,
                name: "burger king"
            },

        });
        await expense.save();
    });

    afterEach(async () => {
        await server.close();
        await Expense.remove({});
    })

    it('should return error 200 if  expense is save ', async () => {

        const res = await info();
        expect(res.status).toBe(200);
    })
});
