
import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('inputItem', table => {
    table.increments('id').primary();
    table.float('value').notNullable();
    table.integer('quantity').notNullable();

    table.integer('input_id')
      .notNullable()
      .references('id')
      .inTable('input');

    table.integer('product_id')
      .notNullable()
      .references('id')
      .inTable('product');

  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('inputItem');
}