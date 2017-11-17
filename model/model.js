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
  .leftJoin('teams as winner', 'result', 'winner.id')
  .select('matches.id', 'matches.match_date', 'teams.team_name as home_team', 'teams2.team_name as away_team', 'winner.team_name as winner', 'teams.id as homeTeamId', 'teams2.id as awayTeamId')
}

function delMatch(matchID){
  return knex('matches')
  .where('id', matchID)
  .del()
}

function newMatch(data){
  console.log(data)
  return knex('matches')
  .insert(data)
}


function updateMatch(id, winner){
  console.log(id)
  return knex('matches')
  .where('id', id)
  .update('result', winner)
}

function teamRoster(teamID){
  return knex('players')
  .where('players.team_id', teamID)
}


module.exports={
  getAllPlayers,
  getOneTeam,
  findCaptains,
  getAllMatches,
  newMatch,
  delMatch,
  updateMatch,
  teamRoster
}
