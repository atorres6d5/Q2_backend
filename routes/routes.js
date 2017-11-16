const express = require('express')
const router = express.Router()
const ctrl = require('../ctrl/ctrl.js')

router.get('/', ctrl.getAll)
router.get('/teams/captains', ctrl.findCaptain)
router.get('/teams/:id', ctrl.getOneTeam)
router.get('/matches', ctrl.getMatches)
<<<<<<< HEAD
//router.delete('/matches/:matchID', ctrl.delMatch)
//router.post('/matches', ctrl.newMatch)
=======
router.delete('/matches/:matchID', ctrl.delMatch)
router.post('/matches', ctrl.newMatch)
>>>>>>> cd6b9c3ebc5e28f52d72d2c97faddbf3485c0623





module.exports= router
