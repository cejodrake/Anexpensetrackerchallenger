const request = require('supertest');
const mongoose = require('mogoose');
const { Expense } = require('../../models/expense');
const api = '/api/report'


let server;
let dateInitial;
let dateEnd;

describe(api, () => {

    dateInitial = '2019-06-01';
    dateEnd = '2019-06-12'

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
    });


    it(' should  return error  400  if date end should  not less than date now', async () => {
        dateInitial = "2016-06-19";
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

        const res = await requestClient();
        expect(res.status).toBe(200);

    });




});
