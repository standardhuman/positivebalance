var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgresql://postgres:nodalpass@localhost:5432/activities';
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

module.exports = {
  getAllActivities: getAllActivities,
  getSingleActivity: getSingleActivity
};
