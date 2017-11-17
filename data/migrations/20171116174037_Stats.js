
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Stats', (table)=>{
    table.integer('player_id').notNullable()
    // table.foreign('player_id').references('Players.id')
    table.integer('points_earned')
    table.integer('fouls')
    table.integer('goals_saved')
    table.timestamps(true, true)

})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Stats')
};
