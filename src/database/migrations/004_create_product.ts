
import Knex from 'knex';

export async function up(knex: Knex){
  return knex.schema.createTable('product', table => {
    table.increments('id').primary();
    table.string('description').notNullable();
    table.string('weight').notNullable();
    table.integer('quantity').notNullable();

    table.integer('category_id')
    .notNullable()
    .references('id')
    .inTable('category');

    table.integer('provider_id')
    .notNullable()
    .references('id')
    .inTable('provider');
    
  });
}

export async function down(knex: Knex){
  return knex.schema.dropTable('product');
}