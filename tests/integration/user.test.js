const request = require('supertest');
const { User } = require('../../models/user');

const api = '/api/users'
let server;
let name;
let email;
let password;



describe(api, () => {

    name = "Juan Carlos Calix";
    password = "JuanCarlos";
    email = "j_calix202@gmail.com";


    const requestClient = () => {
        return request(server).post(api).send(
            { name, email, password }
        );
    }


    beforeEach(async () => {
        server = require('../../index')

    });
    afterEach(async () => {

        await server.close();

    });
    it('should return 400 if name is less 2 characters', async () => {
        name = "j";
        email = "juan@gmail.com";
        password = "JuanCarlos";

        const res = await requestClient();
        expect(res.status).toBe(400);

    })

    it('should return 200 if all reques client is Ok. ', async () => {
        name = "Juan Carlos Calix";
        email = "juan@gmail.com";
        password = "JuanCarlos";


        const res = await requestClient();
        expect(res.status).toBe(200);

    })



});