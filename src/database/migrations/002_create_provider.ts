import Knex from 'knex';

export async function up(knex: Knex){
  return knex.schema.createTable('provider', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('address').notNullable();
    table.integer('address_number').notNullable();
    table.string('address_district').notNullable();
    table.string('address_cep', 9).notNullable();
    table.string('contact').notNullable();
    table.string('cnpj', 18).notNullable();
    table.string('telephone').notNullable();

    table.integer('city_id')
      .notNullable()
      .references('id')
      .inTable('city');
  });
}

export async function down(knex: Knex){
  return knex.schema.dropTable('provider');
}