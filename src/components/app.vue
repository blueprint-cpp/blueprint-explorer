<template>
  <div id='app'>
    <blueprint-list :blueprints='blueprints'></blueprint-list>
    <!--<type-details></type-details>-->
  </div>
</template>

<script>
  const ipcRenderer = require('electron').ipcRenderer;

  import BlueprintList from './blueprint-list.vue'

  export default {
    name: 'app',
    data () {
      return {
        blueprints: []
      }
    },

    created () {
      var blueprints = this.blueprints;

      ipcRenderer.on('open-blueprint', function(event, data) {
        blueprints.push(data);
      });
    },

    components: {
      BlueprintList
    }
  }
</script>
