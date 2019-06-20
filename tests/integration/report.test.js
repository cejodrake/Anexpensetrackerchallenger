const request = require('supertest');
const { Expense } = require('../../models/expense');
const api = '/api/report'


let server;
let dateInitial;
let dateEnd;

describe(api, () => {

    dateInitial = '2019-06-19';
    dateEnd = '2019-06-19'

    const requestClient = () => {
        return request(server).get(api).send(
            { dateInitial, dateEnd }
        );
    }


    beforeEach(async () => {
        server = require('../../index');

    });
    afterEach(async () => {
        await server.close();
        await Expense.remove({});
    });




    it('should  status 200 OK calculate all buy  categorie macDonals ', async () => {
        const expenses = [
            {
                _id: 1,
                date: new Date("2019-02-02"),
                categorie: {
                    _id: 1,
                    name: "macdonalds"
                },
                total: 100,
                comments: ""
            },
            {
                _id: 1,
                date: new Date("2019-02-01"),
                categorie: {
                    _id: 1,
                    name: "macdonalds"
                },
                total: 100,
                comments: ""
            }, {
                _id: 1,
                date: new Date("2019-02-03"),
                categorie: {
                    _id: 1,
                    name: "macdonalds"
                },
                total: 100,
                comments: ""
            },
            {
                _id: 1,
                date: new Date("2019-02-04"),
                categorie: {
                    _id: 1,
                    name: "macdonalds"
                },
                total: 100,
                comments: ""
            },


            {
                _id: 2,
                date: new Date("2019-05-02"),
                categorie: {
                    _id: 2,
                    name: "burgeking"
                },
                total: 150,
                comments: ""
            },

        ];
        await Expense.collection.insertMany(expenses, function (error, docus) { });

        dateInitial = "2019-02-02"
        dateEnd = "2019-03-30"

       
        res = await requestClient();
        expect(res.body.length).toBe(4);

    });


    it(' should  return error  400  if date end should  not less than date now', async () => {

        dateEnd = "2019-05-12";
        const res = await requestClient();
        expect(res.status).toBe(400);

    });



    it(' should  return  error 400 if validate if dateInital  is format correct', async () => {
        dateInitial = "";

        const res = await requestClient();
        expect(res.status).toBe(400);
    });

    it('validate if date final   is format correct', async () => {
        dateEnd = "";
        const res = await requestClient();
        expect(res.status).toBe(400);
    });

    it('should  return status 200  OK  ', async () => {

        dateInitial = "2019-06-02";
        dateEnd = "2019-06-15";
        const res = await requestClient();
        expect(res.status).toBe(200);

    });




});
