
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('teams').insert([
        {id: 1, team_name: 'Gryffindor'},
        {id: 2, team_name: 'Hufflepuff'},
        {id: 3, team_name: 'Ravenclaw'},
        {id: 4, team_name: 'Slytherin'}
      ]);
    });
};
