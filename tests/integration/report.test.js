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


});
