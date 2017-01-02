<template>
  <div id='app'>
    <div id='categories'>
      <h2><i class='bookmark icon'></i>Blueprint</h2>
      <div class='container'>
        <ul class='ui list'>
          <namespace :model='root'></namespace>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import namespace from './namespace.vue';

  //var sqlite3 = require('sqlite3').verbose();
  //var db = new sqlite3.Database(':memory:');

  var treeData = {
    name: '{global}',
    type: 'namespace',
    children: []
  };

  function createNamespace(name)
  {
    return {
      name: name,
      type: 'namespace'
    };
  }

  export default {
    name: 'app',
    data () {
      return {
        root: treeData
      }
    },

    created () {
      for (var i = 1; i <= 10; i++) {
        treeData.children.push(createNamespace('test_' + i));
      }
    },

    components: {
      namespace
    }
  }
</script>
