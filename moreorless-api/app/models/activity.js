'use strict';

const Nodal = require('nodal');

class Activity extends Nodal.Model {}

Activity.setDatabase(Nodal.require('db/main.js'));
Activity.setSchema(Nodal.my.Schema.models.Activity);

module.exports = Activity;
