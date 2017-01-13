var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://pspdyhjajpkpse:ccb3325b132501bc870fcc9594e27587fa5f966e14ebf1e32fad112d780e18f7@ec2-54-221-212-48.compute-1.amazonaws.com:5432/d94e5ob9cmjfc6'

var db = pgp(connectionString);

function testFunction(req, res) {
  res.render('index', {
    title: 'Hello World! Express.js on Google App Engine.'
  });
};

// add query functions
function getAllActivities(req, res, next) {
  db.any('select * from activitytable')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL activities'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleActivity(req, res, next) {
  var actName = req.params.name;
  db.one('select * from activitytable where name = $1', actName)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE activity'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createActivity(req, res, next) {
  req.body.moreorless = parseInt(req.body.moreorless);
  req.body.qty = parseInt(req.body.qty);
  req.body.howmanyunits = parseInt(req.body.howmanyunits);
  req.body.weight = parseInt(req.body.weight);
  req.body.total = parseInt(req.body.total);
  db.none('insert into activitytable(name, moreorless, qty, unit, weight, howmanyunits, total)' +
      'values(${name}, ${moreorless}, ${qty}, ${unit}, ${weight}, ${howmanyunits}, ${total})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one activity'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getAllActivities: getAllActivities,
  getSingleActivity: getSingleActivity,
  createActivity: createActivity,
  testFunction: testFunction
};
