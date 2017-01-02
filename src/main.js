'use strict';

//const blueprint = require('./blueprint.js');

/*var treeData2 = {
  name: '{global}',
  type: 'namespace',
  children: []
};

function fillData() {
  var namespaces = blueprint.getNamespaces();

  for (var i = 0; i < namespaces.length; i++) {
    var tokens = namespaces[i].split('::');

    //tokens.forEach(function(token) {
      var child = {
        name: namespaces[i],
        type: 'namespace'
      }

      treeData2.children.push(child);
    //});
  }
}

fillData();*/

import Vue from 'vue'
import App from './components/app.vue'

new Vue({
  el: '#app',
  render: h => h(App)
});
