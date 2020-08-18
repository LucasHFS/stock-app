import request from 'supertest';
import app from '../../src/app';

describe('Store', () => {
    var lastStoreId = 0;

    //Index
    it('should be able to show all', async() => {
        const response =  await request(app)
            .get('/stores');

        expect(response.status).toEqual(200);
    });

    //Create
    it('should be able to create', async () => {
        const response = await request(app)
            .post('/stores')
            .send({
                name: 'LucaStore',
                address: 'Rua A',
                address_number: '1A',
                address_district: 'São João',
                telephone: '62993328319',
                cnpj: '17322829000103',
                city: 'Brazilandia',
                uf: 'GO',
            });

        expect(response.body).toHaveProperty('id');
        lastStoreId = response.body.id;
        expect(response.status).toEqual(201);
    });

    //Update
    it('should be able to update', async () => {
        const response = await request(app)
            .put(`/stores/${lastStoreId}`)
            .send({
                name: 'LucaStore',
                address: 'Rua A',
                address_number: '1A',
                address_district: 'São João',
                telephone: '62993328319',
                cnpj: '17322829000103',
            });

        expect(response.status).toEqual(200);
    });

    //Delete
    it('should be able to delete', async () => {
        const response = await request(app)
            .delete(`/stores/${lastStoreId}`);

        expect(response.status).toEqual(200);
    });

});
