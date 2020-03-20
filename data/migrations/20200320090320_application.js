
exports.up = function(knex) {
  return knex.schema.createTable('project', tbl => {
      tbl.increments()
      tbl.varchar('name', 50).notNullable()
      tbl.varchar('description', 200)
      tbl.varchar('project_completion', 200).notNullable().defaultTo(false)
  })
  .createTable('resource', tbl => {
    tbl.increments()
      tbl.varchar('name', 50).notNullable()
      tbl.varchar('description', 200)
  })
  .createTable('task', tbl => {
      tbl.increments()
      tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('project')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      tbl.integer('resource_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('resource')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      tbl.varchar('description', 200)
      .notNullable()
      tbl.varchar('note', 200)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('task')
  .dropTableIfExists('resource')
  .dropTableIfExists('project')
};
