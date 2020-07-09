
import Knex from 'knex';

export async function up(knex: Knex){
  return knex.schema.createTable('city', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('uf', 2).notNullable();
  });
}

export async function down(knex: Knex){
  return knex.schema.dropTable('city');
}