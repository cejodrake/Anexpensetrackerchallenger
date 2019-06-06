const request = require('supertest');
const mongoose = require('mongoose')
const { Expense } = require('../../models/expense');
const { Categorie } = require('../../models/categorie');

let server;


describe('/api/expenses', () => {

    let expense;
    let categorie;
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


        categorie = createCategorie(categorieId);
        expense = createExpense(date, categorieId, total, comments);

        await categorie.save();
        await expense.save();
    });

    afterEach(async () => {

        await Expense.remove({});
        await Categorie.remove({})
        await server.close();
    })

    it('should return error 200 if   has a valid request ', async () => {

        const res = await requesClient();

        expect(res.status).toBe(200);
    });
    it('should return  error 400 if Date is null', async () => {

        date = "";
        const res = await requesClient();
        expect(res.status).toBe(400);

    });

});
function createExpense(date, categorieId, total, comments) {
    return new Expense({
        date: date,
        categorie: {
            _id: categorieId,
            name: "burger king"
        },
        total: total,
        comments: comments


    });
}

function createCategorie(categorieId) {
    return new Categorie({
        _id: categorieId,
        name: "MacDonals"
    });
}