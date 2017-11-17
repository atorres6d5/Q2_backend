
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('matches').del()
    .then(function () {
      // Inserts seed entries
      return knex('matches').insert([
        {id: 1, home_team:1, away_team:3, match_date:'09/21/2017', result:1},
        {id: 2, home_team:2, away_team:4, match_date:'09/28/2017', result:4},
        {id: 3, home_team:1, away_team:2, match_date:'10/05/2017', result:1},
        {id: 4, home_team:3, away_team:4, match_date:'10/12/2017', result:4},
        {id: 5, home_team:1, away_team:4, match_date:'10/20/2017', result:1},
        {id: 6, home_team:3, away_team:2, match_date:'10/27/2017', result:2}
      ]);
    });
};
