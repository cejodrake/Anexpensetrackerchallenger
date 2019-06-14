const request = require('supertest');
const mongoose = require('mogoose');
const { Expense } = require('../../models/expense');
const api = '/api/report'


let server;

describe(api, () => {

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
    })

});
