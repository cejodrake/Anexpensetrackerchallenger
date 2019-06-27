const request = require('supertest');
const { User } = require('../../models/user');

const api = '/api/user'

let server;
let name;
let user;
let password;


describe(api, () => {

    const requestClient = () => {
        return request(server).post(api).send(
            { name, user, password }
        );

    };

    beforeEach(async () => {
        server = require('../../index');
    });

    afterEach(async () => {
        await server.close();
    })
    it('should return error 400 if name user is min 2 character ', async () => {
        name = "jc";
        const res = requestClient();
        expect(res.status).toBe(400);

    })

});