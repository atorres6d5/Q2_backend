
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Position').del()
    .then(function () {
      // Inserts seed entries
      return knex('Position').insert([
        {id: 1, position_type: 'Keeper'},
        {id: 2, position_type: 'Beater'},
        {id: 3, position_type: 'Chaser'},
        {id: 4, position_type: 'Seeker'}
      ]);
    });
};
