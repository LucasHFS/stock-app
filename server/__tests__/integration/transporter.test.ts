import request from 'supertest';
import app from '../../src/app';

describe('Transporter', () => {

    var lastTransporterId = 0;
    //Index
    it('should be able to show all', async() => {
        const response =  await request(app)
            .get('/transporters');

        expect(response.status).toEqual(200);
    });


    //Create
    it('should be able to create', async () => {
        const response = await request(app)
            .post('/transporters')
            .send({
                name: 'LucasTransporter',
                address: 'Rua A',
                address_number: '1A',
                address_district: 'São João',
                address_cep: '75170000',
                telephone: '62993328319',
                cnpj: '17322829000103',
                city_id: 1,
            });

        expect(response.body).toHaveProperty('id');
        lastTransporterId = response.body.id;
        expect(response.status).toEqual(201);
    });

    //Update
    it('should be able to update', async () => {
        const response = await request(app)
            .put(`/transporters/${lastTransporterId}`)
            .send({
                name: 'LucasTransporter',
                address: 'Rua A',
                address_number: '1A',
                address_district: 'São João',
                address_cep: '75170000',
                telephone: '62993328319',
                cnpj: '17322829000103',
                city_id: 1,
            });

        expect(response.status).toEqual(200);
    });

    //Delete
    it('should be able to delete', async () => {
        const response = await request(app)
            .delete(`/transporters/${lastTransporterId}`);

        expect(response.status).toEqual(200);
    });

});
