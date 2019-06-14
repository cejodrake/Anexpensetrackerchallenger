const request = require('supertest');
const mongoose = require('mogoose');
const { Expense } = require('../../models/expense');
const api = '/api/report'


let server;

describe(api, () => {

    let date1 = '2019-01-01';
    let date2 = '2019-01-02'

    const requesClient = () => {
        return request(server).post(api).send(
            { date1, date2 }
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

    it('date1 should be not less than date now', async () => {
        let dateNow = Date.now();
        const res = await requesClient();
        expect(res.status).toBe(400);

    });
});
