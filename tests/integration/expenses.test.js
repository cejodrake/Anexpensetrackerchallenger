const request = require('supertest');
const { Expense } = require('../../models/expense');

let server;

describe('/api/expenses', () => {

    const info = () => {
        return request(server).post('api/expenses');

    }
})


