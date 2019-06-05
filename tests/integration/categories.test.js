const request = require('supertest');
const { Categorie } = require('../../models/categorie');
const server = require('../../index');



describe('/api/categories', () => {
    beforeEach(() => { server });

    afterEach(async () => {
        await server.close();
        await Categorie.deleteMany({});
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

            expect(res.status).toBe(200);
            expect(res.body.length).toBe(3);
            expect(res.body.some(c => c.name === "coffee")).toBeTruthy();
            expect(res.body.some(c => c.name === "te")).toBeTruthy();
            expect(res.body.some(c => c.name === "snack")).toBeTruthy();
        });
    });
})