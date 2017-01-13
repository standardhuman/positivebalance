var express = require('express');
var router = express.Router();

var db = require('../queries');

router.get('/test', db.testFunction)
router.get('/api/activities', db.getAllActivities)
router.get('/api/activities/:name', db.getSingleActivity)
router.post('/api/activities', db.createActivity)

module.exports = router;
