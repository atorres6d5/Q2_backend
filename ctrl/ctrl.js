const model = require('../model/model.js')


function getAll(req, res, next){
  model.getAllPlayers().then(result=>{
    return res.status(200).send(result)
  })
}

module.exports = {getAll}
