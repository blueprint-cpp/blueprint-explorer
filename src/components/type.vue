<template>
  <li class='item'>
    <div class='namespace'>
      <span>{{ model.name }}</span>
    </div>
  </li>
</template>

<script>
  module.exports = {
    name: 'type',
    props: { model: Object }
  };
</script>
