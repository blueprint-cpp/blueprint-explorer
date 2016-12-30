'use strict';

const Vue = require('./node_modules/vue/dist/vue.js');

Vue.config.debug = true;

var treeData = {
  name: '{global}',
  type: 'namespace',
  children: [
    {
      name: 'foo',
      type: 'namespace',
      children: [
        { name: 'type_1', type: 'type' },
        { name: 'type_2', type: 'type' }
      ]
    },
    {
      name: 'bar',
      type: 'namespace',
      children: [
        { name: 'type_3', type: 'type' },
        { name: 'type_4', type: 'type' },
        { name: 'type_5', type: 'type' }
      ]
    },
    { name: 'type_6', type: 'type' },
    { name: 'type_7', type: 'type' }
  ]
};

var namespaceVue = Vue.component('namespace', {
  template: '#namespace',
  props: { model: Object },

  computed: {
    hasChildren: function() {
      return this.model.children && this.model.children.length;
    }
  }
});

var typeVue = Vue.component('type', {
  template: '#type',
  props: { model: Object }
});

var appVue = new Vue({
  el: '#app',
  data: {
    root: treeData
  }
});
