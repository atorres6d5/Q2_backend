const model = require('../model/model.js')


function getAll(req, res, next){
  model.getAllPlayers().then(result=>{
    return res.status(200).send(result)
  })
}

function getOneTeam(req, res, next){
  model.getOneTeam(req.params.id).then(result=>{
    return res.status(200).send(result)
  })
}

function findCaptain(req, res, next){
  model.findCaptains().then(result=>{
    //console.log(result);
    return res.status(200).send(result)
  })
}

function getMatches(req, res, next){
  model.getAllMatches().then(result=>{
    //console.log(result);
    return res.status(200).send(result)
  })
}

function delMatch(req, res, next){
  let matchID = req.params.matchID
  //console.log(matchID)
  model.delMatch(matchID).then(result=>{
    return res.sendStatus(204).send(result)
  })
}

function newMatch(req, res, next){
  let body = req.body
  model.newMatch(body).then(result=>{
    return res.status(200).send(result)
  })
}

function updateMatch(req, res, next){
  let matchID = req.params.matchID
  let winner = req.body.winner
  model.updateMatch(matchID, winner).then(result=>{
    return res.sendStatus(200).send(result)
  })
}





module.exports = {getAll, getOneTeam, findCaptain, getMatches, delMatch, newMatch, updateMatch}
