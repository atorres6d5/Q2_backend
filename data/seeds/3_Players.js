
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        {id: 1, player_name: 'Oliver Wood', team_id:1, position_id:1, is_captain:true},
        {id: 2, player_name: 'Fred Weasley', team_id:1, position_id:2, is_captain:false},
        {id: 3, player_name: 'George Weasley', team_id:1, position_id:2, is_captain:false},
        {id: 4, player_name: 'Angelina Johnson', team_id:1, position_id:3, is_captain:false},
        {id: 5, player_name: 'Alicia Spinnet', team_id:1, position_id:3, is_captain:false},
        {id: 6, player_name: 'Kaite Bell', team_id:1, position_id:3, is_captain:false},
        {id: 7, player_name: 'Harry Potter', team_id:1, position_id:4, is_captain:false}
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('players_id_seq', (SELECT MAX(id) FROM players));`
      );
    })
};
