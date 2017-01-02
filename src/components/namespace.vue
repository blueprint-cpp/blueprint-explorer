<template>
  <li class='item'>
    <div class='namespace'>
      <span>{{ model.name }}</span>
    <div>
    <ul v-if='hasChildren' class='ui list'>
      <component v-for='child in model.children' :is='child.type' :model='child'></component>
    </ul>
  </li>
</template>

<script>
  import type from './type.vue';

  module.exports = {
    name: 'namespace',
    props: { model: Object },

    computed: {
      hasChildren: function() {
        return this.model.children && this.model.children.length;
      }
    },

    components: {
      type
    }
  };
</script>
