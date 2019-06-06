const request = require('supertest');
const mongoose = require('mongoose')
const { Expense } = require('../../models/expense');
const { Categorie } = require('../../models/categorie');
const app = require('../../index');
let server;

describe('/api/expenses', () => {

    let expense;
    let date;
    let categorieId;
    let comments;
    let total;

    const requesClient = () => {
        return request(server).post('/api/expenses').send({ date, categorieId, total, comments });

    };

    beforeEach(async () => {
        server = require('../../index');
        categorieId = mongoose.Types.ObjectId();
        date = "2019-10-01";
        total = 100;
        comments = "tes1t";

        console.log(categorieId);



        expense = new Expense({
            date: date,
            categorie: {
                _id: categorieId,
                name: "burger king"
            },
            total: total,
            comments: comments


        });
        await expense.save();
    });

    afterEach(async () => {
        await server.close();
        await Expense.remove({});
    })

    it('should return error 200 if   has a valid request ', async () => {

        const res = await requesClient();
        console.log(res.text);
        expect(res.status).toBe(200);
    })
});
