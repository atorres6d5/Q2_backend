
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Stats').del()
    .then(function () {
      // Inserts seed entries
      return knex('Stats').insert([
        {player_id: 1, points_earned:0 , fouls:0, goals_saved:28},
        {player_id: 2, points_earned:0, fouls:6, goals_saved:10},
        {player_id: 3, points_earned:0, fouls:6, goals_saved:11},
        {player_id: 4, points_earned:90, fouls:10, goals_saved:7},
        {player_id: 5, points_earned:45, fouls:4, goals_saved:3},
        {player_id: 6, points_earned:75, fouls:7, goals_saved:2},
        {player_id: 7, points_earned:450, fouls:2, goals_saved:0}
      ]);
    });
};
