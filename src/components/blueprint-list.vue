<template>
  <div>
    <div>
      <blueprint v-for='blueprint in blueprints' :model='blueprint'></blueprint>
    </div>
  </div>
</template>

<script>
  import electron from 'electron'
  import Blueprint from './blueprint.vue'

  export default {
    name: 'blueprint-list',

    props: {
      blueprints: Array
    },

    components: {
      Blueprint
    }
  }
</script>
