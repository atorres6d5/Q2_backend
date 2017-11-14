const fs = require('fs')
const dbpath = __dirname+"/../data/database.json"
const format = "utf-8"
const knex = require('../connection.js')


function getAllPlayers(){
  return knex('players')
}


// function getAll(){
//   let roster = JSON.parse(fs.readFileSync(dbpath, format))
//   return roster
// }


module.exports={getAllPlayers}
