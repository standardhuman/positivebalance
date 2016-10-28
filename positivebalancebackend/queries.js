var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/activities';
var db = pgp(connectionString);

// add query functions
function getAllActivities(req, res, next) {
  db.any('SELECT * FROM activity')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL activities'
        });
    })
    .catch(function (err) {
      console.log(err);
      return next(err);
    });
}

function getSingleActivity(req, res, next) {
  var activityID = parseInt(req.params.id);
  console.log(getSingleActivity);
  db.one('SELECT * FROM activity WHERE id = $1', activityID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE activity'
        });
    })
    .catch(function (err) {
      console.log(err);
      return next(err);
    });
}

function createActivity(req, res, next) {
  console.log(req.body);
  req.body.moreorless = parseInt(req.body.moreorless);
  req.body.weight = parseInt(req.body.weight);
  req.body.minQty = parseInt(req.body.minQty);
  req.body.howManyUnits = parseInt(req.body.howManyUnits);
  db.none('INSERT INTO activity(name, moreorless, unitName, weight, minQty, didIDo, howManyUnits)' +
      'values(${name}, ${moreorless}, ${unitName}, ${weight}, ${minQty}, ${didIDo}, ${howManyUnits})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one activity'
        });
    })
    .catch(function (err) {
      console.log(err);
      return next(err);
    });
}

function updateActivity(req, res, next) {
  db.none('UPDATE activity SET name=$1, moreorless=$2, unitName=$3, weight=$4, minQty=$5, didIDo=$6, howManyUnits=$7 WHERE id=$8',
    [req.body.name, parseInt(req.body.moreorless), req.body.unitName, parseInt(req.body.weight),
      parseInt(req.body.minQty), req.body.didIDo, parseInt(req.body.howManyUnits), (req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated activity'
        });
    })
    .catch(function (err) {
      console.log(err);
      return next(err);
    });
}

function removeActivity(req, res, next) {
  var activityID = parseInt(req.params.id);
  db.result('DELETE FROM activity WHERE id = $1', activityID)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} activity`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      console.log(err);
      return next(err);
    });
}

module.exports = {
  getAllActivities: getAllActivities,
  getSingleActivity: getSingleActivity,
  createActivity: createActivity,
  updateActivity: updateActivity,
  removeActivity: removeActivity
};
