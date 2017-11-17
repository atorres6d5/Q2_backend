
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('position').del()
    .then(function () {
      // Inserts seed entries
      return knex('position').insert([
        {id: 1, position_type: 'Keeper'},
        {id: 2, position_type: 'Beater'},
        {id: 3, position_type: 'Chaser'},
        {id: 4, position_type: 'Seeker'}
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('position_id_seq', (SELECT MAX(id) FROM position));`
      );
    })
};
