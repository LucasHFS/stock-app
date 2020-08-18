import request from 'supertest';
import app from '../../src/app';
import factories from '../Util/factories';

describe('City', () => {

    var lastCityId = 0;

    //Index
    it('should be able to show all', async() => {
        const response =  await request(app)
            .get('/cities');

        expect(response.status).toEqual(200);
    });
    
    //Create
    it('should be able to create', async () => {
        const response = await request(app)
        .post('/cities')
        .send({
            name: 'Goiânia',
            uf: 'GO'
        });
        
        expect(response.body).toHaveProperty('id');
        lastCityId = response.body.id;
        expect(response.status).toEqual(201);
    });

    //Update
    it('should be able to update', async () => {
        const response = await request(app)
            .put(`/cities/${lastCityId}`)
            .send({
                name: 'Goianapolis',
                uf: 'GO'
            });

        expect(response.status).toEqual(200);
    });

    //Delete
    it('should be able to delete', async () => {
        const response = await request(app)
            .delete(`/cities/${lastCityId}`);
        
        expect(response.status).toEqual(200);
    });

});
