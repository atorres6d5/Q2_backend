
exports.up = function(knex, Promise) {
  return knex.schema.createTable('teams', (table)=>{
    table.increments()
    table.string('team_name', 15)
    table.text('team_img')
    table.timestamps(true, true)
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('teams')
};
