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
        const user = [
            {
                name: "Juan Carlos Calix",
                password: "1234567",
                email: "j_calix2001@hotmail.com"
            }
        ];


        await User.collection.insertMany(user, function (error, docus) { });

        const res = await requestClient();
        expect(res.status).toBe(200);
        expect(res.body.some(n => n.name === "Juan Carlos Calix")).toBeTruthy();
        expect(res.body.some(e => e.email === "j_calix2001@hotmailcom ")).toBeTruthy();
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

    it('should return 200 if all reques client is Ok. ', async () => {
        name = "Juan Carlos Calix";
        email = "juan@gmail.com";
        password = "JuanCarlos";

        const res = await requestClient();
        expect(res.status).toBe(200);

    })



});