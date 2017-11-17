exports.up = function(knex, Promise) {
  return knex.schema.createTable('Players', (table)=>{
    table.increments()
    table.string('player_name', 25)
    table.integer('team_id').notNullable()
    // table.foreign('team_id').references('Teams.id')
    table.integer('position_id').notNullable()
    // table.foreign('position_id').references('Position.id')
    table.boolean('is_captain').defaultTo(false)
    table.timestamps(true, true)
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Players')
};
