<template>
  <div>
    <div :style="{'margin-left': `${depth*10}px`}" @click="expanded=!expanded" class="node-name">
      <span class="type" v-if="hasChildren">{{expanded ? '&#9660;' : '&#9658;'}}</span>
      <span v-else>&#9671;</span>
      {{node.name}}
    </div>

    <span class="tree-item-wrapper" v-if="expanded">
      <TreeGridItem v-for="child in node.children" :key="child.name" :node="child" :depth="depth+1"></TreeGridItem>
    </span>
  </div>
</template>
<script>
export default {
  name: "TreeGridItem",
  props: {
    node: Object,
    depth: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      expanded: false
    };
  },
  computed: {
    hasChildren() {
      return this.node.children;
    }
  }
};
</script>
<style lang="scss" scoped>
.node-name {
  cursor: pointer;
  .type {
    font-size: 14px;
    line-height: 12px;
  }
}
</style>