const request = require('supertest');
const mongoose = require('mogoose');
const { Expense } = require('../../models/expense');

let server;

describe('/api/report', () => {
    beforeEach(async () => {
        server = require('../../index');
    });
    afterEach(async () => {
        await server.close();
    })

});
