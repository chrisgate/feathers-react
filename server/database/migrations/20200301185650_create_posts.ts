import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("posts", table => {
    table.increments();
    table.timestamps(true, true);
    table.string("title");
    // Owner relation
    table
      .bigInteger("owner_id")
      .unsigned()
      .index()
      .references("id")
      .inTable("users");
  })
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("posts");
}

