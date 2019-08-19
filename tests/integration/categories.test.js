const request = require('supertest');
const { Categorie } = require('../../models/categorie');


let server;
let nameCategore;


describe('/api/categories', () => {

    beforeEach(() => { server = require('../../index'); })

    afterEach(async () => {
        await Categorie.remove({});
        await server.close();



    });

    describe('GET / ', () => {
        it('should return all categories ', async () => {

            const categories = [
                { name: 'coffee' },
                { name: 'te' },
                { name: 'snack' }

            ]
            await Categorie.collection.insertMany(categories, function (error, docus) { });

            const res = await request(server).get('/api/categories');

            expect(res.body.length).toBe(3);
            expect(res.body.some(c => c.name === "coffee")).toBeTruthy();
            expect(res.body.some(c => c.name === "te")).toBeTruthy();
            expect(res.body.some(c => c.name === "snack")).toBeTruthy();
        });
    });

    describe('POST', () => {

        const requesClient = () => {
            return request(server).post('/api/categories').send({ nameCategore });
        };
        beforeEach(() => {
            nameCategore = " Coffee";
        });

        it('should return error 400 if name is less than 5 characters', async () => {
            nameCategore = "abcd";
            const res = await requesClient();
            expect(res.status).toBe(400);
        });

        it('should return error 400 if the name is empty', async () => {
            nameCategore = "";
            const res = await requesClient();
            expect(res.status).toBe(400);
        })

    });

})