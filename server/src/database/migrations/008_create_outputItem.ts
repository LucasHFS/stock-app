
import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('outputItem', table => {
    table.increments('id').primary();
    table.integer('quantity').notNullable();
    table.float('value').notNullable();

    table.integer('product_id')
      .notNullable()
      .references('id')
      .inTable('product');

    table.integer('output_id')
      .notNullable()
      .references('id')
      .inTable('output');

  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('outputItem');
}