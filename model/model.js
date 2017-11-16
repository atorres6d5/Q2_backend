const fs = require('fs')
const dbpath = __dirname+"/../data/database.json"
const format = "utf-8"
const knex = require('../connection.js')


function getAllPlayers(){
  return knex('players')
}

function getOneTeam(team_id){
  return knex('teams')
  .innerJoin('players', 'teams.id', 'players.team_id')
  .where('players.team_id', team_id)
}

function findCaptains(){
  return knex('players').where({is_captain: true})
}

function getAllMatches(){
  return knex('matches')
  .join('teams', 'home_team', 'teams.id')
  .join('teams as teams2', 'away_team', 'teams2.id')
  .join('teams as winner', 'result', 'winner.id')
  .select('matches.id','teams.team_name as home_team', 'teams2.team_name as away_team', 'winner.team_name as winner')
}

function delMatch(matchID){
  return knex('matches')
  .where('matches.id', matchID)
  .del()
}




module.exports={getAllPlayers, getOneTeam, findCaptains, getAllMatches, delMatch}
