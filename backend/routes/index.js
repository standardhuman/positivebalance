var express = require('express');
var router = express.Router();

var db = require('../queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/api/activities', db.getAllActivities);
router.get('/api/activities/:id', db.getSingleActivity);
router.post('/api/activities', db.createActivity);
router.put('/api/activities/:id', db.updateActivity);
router.delete('/api/activities/:id', db.removeActivity);

module.exports = router;
