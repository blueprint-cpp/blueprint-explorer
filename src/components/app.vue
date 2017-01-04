<template>
  <div id='app'>
    <blueprint-list :blueprints='blueprints'></blueprint-list>
    <!--<type-details></type-details>-->
  </div>
</template>

<script>
  const ipcRenderer = require('electron').ipcRenderer;
  const config = require('../../config.js');

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

      var openedBlueprints = config.getBlueprints();

      if (openedBlueprints) {
        for (var i = 0; i < openedBlueprints.length; i++) {
          blueprints.push({ file: openedBlueprints[i] });
        }
      }
    },

    components: {
      BlueprintList
    }
  }
</script>
