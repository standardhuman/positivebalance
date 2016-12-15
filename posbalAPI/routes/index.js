var express = require('express');
var router = express.Router();

var db = require('../queries');


router.get('/api/activities', db.getAllActivities);
router.get('/api/activities/:name', db.getSingleActivity)

module.exports = router;
