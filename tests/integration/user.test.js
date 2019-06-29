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
    email = "j_calix2002@hotmail.com";



    const requestClient = () => {
        return request(server).post(api).send(
            { name, email, password }
        );
    }


    beforeEach(async () => {
        server = require('../../index')

    });
    afterEach(async () => {

        await User.remove({});
        await server.close();

    });

    it('should return 200 if user is create success', async () => {



        //await User.collection.insertOne(user, function (error, docus) { });

        const res = await requestClient();
        expect(res.status).toBe(200);
        expect(res.body.name === "Juan Carlos Calix").toBeTruthy();
        expect(res.body.email === "j_calix2002@hotmail.com").toBeTruthy();

    });

    it('should  return 400 if user is already registred', async () => {
        const user = [
            {
                name: "Juan Carlos Calix",
                password: "1234567",
                email: "j_calix2002@hotmail.com"
            }
        ];

        await User.collection.insertMany(user, function (error, docus) { });

        const res = await requestClient();
        expect(res.status).toBe(400);
    });

    it('should return 400 if email is empty', async () => {
        email = "";

        const res = await requestClient();
        expect(res.status).toBe(400);
    })

    it('should return 400 if name is least 2 characters long', async () => {
        name = "j";
        email = "juan@gmail.com";
        password = "JuanCarlos";

        const res = await requestClient();
        expect(res.status).toBe(400);

    })

});