import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("users", table => {
    table.increments();
    table.timestamps(true, true);
    table.string("email", 255);
    table.string("password", 255);
  })
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("users");
}

