const request = require('supertest');
const { User } = require('../../models/user');

const api = '/api/user'

let server;
let user;
let password;


describe(api, () => {

    const requestClient = () => {
        return reques(server).post(api).send(
            { user, password }
        );

    };

    beforeEach(async () => {
        server = require('../../index');
    });

    afterEach(async () => {
        await server.close();
    })
    it('should return 400 if name user is min 2 character ', async () => {

    })

});