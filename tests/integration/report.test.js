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

    const requesClient = () => {
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
    // date1 shouldn't be than  less to date now date1 < now.
    // date1 shouldn't be  greater date2 date1 <=  date2


    it('date end should  not less than date now', async () => {

        dateEnd = "2019-06-12";
        const res = await requesClient();
        expect(res.status).toBe(400);

    });

    it('date Initial should  not less than date now', async () => {

        dateEnd = "2019-06-12";
        const res = await requesClient();
        expect(res.status).toBe(400);

    });


    it('should  return status 200  OK  ', async () => {
        dateInitial = '2019-06-01';
        dateEnd = '2019-06-12'
        const res = await requesClient();
        expect(res.status).toBe(200);

    });

});
