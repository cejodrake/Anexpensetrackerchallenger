const request = require('supertest');
const { User } = require('../../models/user');

const api = '/api/users'

let server;
let name;
let user;
let password;


describe(api, () => {

    name = "Juan Carlos Calix";
    password = "JuanCarlos";
    user = "j_calix2002@hotmail.com";

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
    });

    it('should return 200 if all reques client is Ok. ', async () => {

        const res = requestClient();
        expect(res.status).toBe(200);

    })



});