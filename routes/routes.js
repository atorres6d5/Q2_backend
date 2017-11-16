const express = require('express')
const router = express.Router()
const ctrl = require('../ctrl/ctrl.js')

router.get('/', ctrl.getAll)
router.get('/teams/captains', ctrl.findCaptain)
router.get('/teams/:id', ctrl.getOneTeam)
router.get('/matches', ctrl.getMatches)
router.delete('/matches/:matchID', ctrl.delMatch)
router.post('/matches', ctrl.newMatch)





module.exports= router
