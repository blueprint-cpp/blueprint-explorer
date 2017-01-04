<template>
  <div>
    <p @click='toggle'>{{ model.file }}</p>
    <ul v-show='expanded'>
      <component v-for='child in children' :is='child.type' :model='child'></component>
    </ul>
  </div>
</template>

<script>
  const sqlite3 = require('sqlite3');

  import Namespace from './namespace.vue'
  import Type from './type.vue'

  var treeData = createNamespaceNode('{}');

  function insertType(parent, type) {
    var namespaceNode = insertNamespace(parent, type.namespace.split('::'));
    var node = createTypeNode(type.name);

    namespaceNode.children.push(createTypeNode(type.name));
  }

  function insertNamespace(parent, namespaceTokens) {
    var token = namespaceTokens.shift();
    var node = getOrCreateNamespaceNode(parent, token);

    if (namespaceTokens && namespaceTokens.length > 0) {
      return insertNamespace(node, namespaceTokens);
    }

    return node;
  }

  function getOrCreateNamespaceNode(parent, name) {
    for (var i = 0; i < parent.children.length; i++) {
      var child = parent.children[i];

      if (child.name == name) {
        return child;
      }
    }

    var node = createNamespaceNode(name);
    parent.children.push(node);

    return node;
  }

  function createNamespaceNode(name) {
    return { name: name, type: 'namespace', children: [] };
  }

  function createTypeNode(name) {
    return { name: name, type: 'type' };
  }

  export default {
    name: 'blueprint',

    props: {
      model: Object
    },

    data: function () {
      return {
        expanded: true,
        children: []
      };
    },

    methods: {
      toggle: function () {
        this.expanded = !this.expanded;
      }
    },

    created () {
      let db = new sqlite3.Database(this.model.file);

      db.serialize(function () {
        db.each('SELECT t.name, ns.namespace FROM Type t, Namespace ns WHERE t.namespace = ns.crc ORDER BY ns.namespace, t.name', function(error, row) {
          insertType(treeData, row);
        });
      });

      db.close();

      this.children = treeData.children;
    },

    components: {
      Namespace,
      Type
    }
  }
</script>
