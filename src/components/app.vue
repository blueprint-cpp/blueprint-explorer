<template>
  <div id='app'>
    <blueprint-list :blueprints='blueprints'></blueprint-list>
    <!--<type-details></type-details>-->
  </div>
</template>

<script>
  import BlueprintList from './blueprint-list.vue'

  export default {
    name: 'app',
    data () {
      return {
        blueprints: []
      }
    },

    created () {
      //this.blueprints.push({ name: 'blueprint.db', file: 'assets/blueprint.db' });
    },

    components: {
      BlueprintList
    }
  }
</script>
