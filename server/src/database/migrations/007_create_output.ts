
import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('output', table => {
    table.increments('id').primary();
    table.float('total').notNullable();
    table.float('freight').notNullable();

    table.integer('transporter_id')
      .notNullable()
      .references('id')
      .inTable('transporter');

    table.integer('store_id')
      .notNullable()
      .references('id')
      .inTable('store');

  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('output');
}