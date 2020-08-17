
import Knex from 'knex';

export async function up(knex: Knex){
  return knex.schema.createTable('input', table => {
    table.increments('id').primary();
    table.date('request_date').notNullable();
    table.date('input_date').notNullable();
    table.float('total').notNullable();
    table.float('frete');

    table.integer('transporter_id')
    .notNullable()
    .references('id')
    .inTable('transporter');
    
  });
}

export async function down(knex: Knex){
  return knex.schema.dropTable('input');
}