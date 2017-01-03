var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = {
   user: 'postgres',
   password: 'KLRpsql!650',
   host: '104.199.113.67',
   port: 5432,
   database: 'activities'
};

var db = pgp(connectionString);

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
  createActivity: createActivity
};
