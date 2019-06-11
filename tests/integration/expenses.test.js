const request = require('supertest');
const mongoose = require('mongoose')
const moment = require('moment');
const { Expense } = require('../../models/expense');
const { Categorie } = require('../../models/categorie');

let server;

describe('/api/expenses', () => {

    beforeEach(async () => { server = require('../../index') });

    afterEach(async () => {

        await Expense.remove({});
        await server.close();

    });

    describe('GET /', () => {
        it('should return all expenses', async () => {
            const date1 = moment("2013-01-05", "MM-DD-YYYY", true).creationData === {
                input: "2013-01-05",
                format: "YYYY-MM-DD",

                strict: true,
            };

            const expenses = [
                {
                    date: new Date(moment("2013-01-05").format('YYYY-MM-DD, ll')),
                    categorie: {

                        name: "macdonalds"
                    },
                    total: 100,
                    comments: ""
                },
                /* {
                     date: "2019-11-05",
                     categorie: {
 
                         _id: 2,
                         name: "starbuck"
                     },
                     total: 102,
                     comments: ""
                 },
 
                 {
                     date: "2019-12-05",
                     categorie: {
 
                         _id: 3,
                         name: "burger king"
                     },
                     total: 160,
                     comments: ""
                 }*/


            ];


            await Expense.collection.insertMany(expenses, function (error, docus) { });
            const res = await request(server).get('/api/expenses');

            console.log(res.body);
            console.log(date1);
            expect(res.status).toBe(200);
            expect(res.body.length).toBe(1);
            expect(res.body.some(e => e.date === "2013-01-02")).toBeTruthy();



        });

    });
});



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

    it('should return all expenses create for the user ', () => {

    });

    it('should return error 200 if   has a valid request ', async () => {

        const res = await requesClient();

        expect(res.status).toBe(200);
    });
    it('should return  error 400 if Date is null', async () => {

        date = "";
        const res = await requesClient();
        expect(res.status).toBe(400);

    });

    it('should return  error 400 if total no is numeric ', async () => {

        total = "sss";
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