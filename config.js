'use strict';

const Config = require('electron-config');
const config = new Config();

module.exports = {
  addBlueprint: function(file) {
    var blueprints = config.get('blueprints');
    blueprints.push(file);
    config.set('blueprints', blueprints);
  },

  getBlueprints: function() {
    return config.get('blueprints');
  }
};
