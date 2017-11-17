
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
        {id: 7, player_name: 'Harry Potter', team_id:1, position_id:4, is_captain:false},
        {id: 8, player_name: 'Herbet Fleet', team_id:2, position_id:1, is_captain:false},
        {id: 9, player_name: 'Michael McManus', team_id:2, position_id:2, is_captain:false},
        {id: 10, player_name: 'Anthony Rickett', team_id:2, position_id:2, is_captain:false},
        {id: 11, player_name: 'Malcolm Preece', team_id:2, position_id:3, is_captain:false},
        {id: 12, player_name: 'Heidi Macavoy', team_id:2, position_id:3, is_captain:false},
        {id: 13, player_name: 'Tamsin Applebee', team_id:2, position_id:3, is_captain:false},
        {id: 14, player_name: 'Cedric Diggory', team_id:2, position_id:4, is_captain:true},
        {id: 15, player_name: 'Grant Page', team_id:3, position_id:1, is_captain:false},
        {id: 16, player_name: 'Duncan Inglebee', team_id:3, position_id:2, is_captain:false},
        {id: 17, player_name: 'Jason Samuels', team_id:3, position_id:2, is_captain:false},
        {id: 18, player_name: 'Rodger Davis', team_id:3, position_id:3, is_captain:true},
        {id: 19, player_name: 'Jeremy Stretton', team_id:3, position_id:3, is_captain:false},
        {id: 20, player_name: 'Randolf Burrow', team_id:3, position_id:3, is_captain:false},
        {id: 21, player_name: 'Cho Chang', team_id:3, position_id:4, is_captain:false},
        {id: 22, player_name: 'Miles Bletchley', team_id:4, position_id:1, is_captain:false},
        {id: 23, player_name: 'Peregrine Derrick', team_id:4, position_id:2, is_captain:false},
        {id: 24, player_name: 'Lucian Bole', team_id:4, position_id:2, is_captain:false},
        {id: 25, player_name: 'Marcus Flint', team_id:4, position_id:3, is_captain:true},
        {id: 26, player_name: 'Graham Montague', team_id:4, position_id:3, is_captain:false},
        {id: 27, player_name: 'Cassius Warrington', team_id:4, position_id:3, is_captain:false},
        {id: 28, player_name: 'Draco Malfoy', team_id:4, position_id:4, is_captain:false}
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('players_id_seq', (SELECT MAX(id) FROM players));`
      );
    })
};
