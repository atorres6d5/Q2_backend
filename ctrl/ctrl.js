const model = require('../model/model.js')


function getAll(req, res, next){
  let roster = model.getAll()
  return res.status(200).send({
    data: roster
  })
}








module.exports = {getAll}
