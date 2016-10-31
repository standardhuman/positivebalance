'use strict';

const Nodal = require('nodal');

class CreateActivities extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016101421543897;
  }

  up() {

    return [
      this.createTable("activities", [{"name":"activity_name","type":"string"},{"name":"moreorless","type":"string"},{"name":"min_qty","type":"int"},{"name":"activity_unit","type":"string"},{"name":"activity_weight","type":"int"}])
    ];

  }

  down() {

    return [
      this.dropTable("activities")
    ];

  }

}

module.exports = CreateActivities;
