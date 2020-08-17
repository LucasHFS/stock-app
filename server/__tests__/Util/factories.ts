import faker from 'faker';
import  factory  from 'factory-girl';
import knex from '../../src/database/connection';

factory.define('City', knex('city').columns(), {
    name: faker.address.city(),
    uf: faker.address.stateAbbr()
});

export default factory;