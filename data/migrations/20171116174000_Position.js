
exports.up = function(knex, Promise) {
  return knex.schema.createTable('position', (table)=>{
    table.increments()
    table.string('position_type', 20)
    table.timestamps(true, true)
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('position')
};
