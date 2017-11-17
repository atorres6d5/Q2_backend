
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Matches', (table)=>{
    table.increments()
    table.integer('home_team').notNullable()
    //table.foreign('home_team').references('Teams.id')
    table.integer('away_team').notNullable()
    //table.foreign('away_team').references('Teams.id')
    table.string('match_date', 50)
    table.integer('result').notNullable()
    //table.foreign('result').references('Teams.id')
    table.timestamps(true, true)
    })
    };

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Matches')
};
