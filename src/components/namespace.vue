<template>
  <li class='item'>
    <div @click='toggle'>
      <span>{{ model.name }}</span>
    <div>
    <ul v-show='expanded' v-if='hasChildren' class='ui list'>
      <component v-for='child in model.children' :is='child.type' :model='child'></component>
    </ul>
  </li>
</template>

<script>
  import type from './type.vue'

  module.exports = {
    name: 'namespace',
    props: { model: Object },

    data: function () {
      return { expanded: true };
    },

    methods: {
      toggle: function() {
        this.expanded = !this.expanded;
      }
    },

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
