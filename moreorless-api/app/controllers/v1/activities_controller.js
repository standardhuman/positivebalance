'use strict';

const Nodal = require('nodal');
const Activity = Nodal.require('app/models/activity.js');

class V1ActivitiesController extends Nodal.Controller {

  index() {

    Activity.query()
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models);

      });

  }

  show() {

    Activity.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    Activity.create(this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  update() {

    Activity.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    Activity.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = V1ActivitiesController;
