<template>
  <div class="my-container">
    <div class="my-row">
      <div class="c-12 node-wrapper">
        <div class="my-row">
          <div
            :style="{ 'margin-left': `${depth * 10}px` }"
            @click="expanded = !expanded"
            class="node-name c-6"
          >
            <span class="type" v-if="hasChildren">
              <font-awesome-icon
                class="arrow"
                v-if="expanded"
                icon="sort-down"
              ></font-awesome-icon>
              <font-awesome-icon
                class="arrow not-expanded-arrow"
                v-if="!expanded"
                icon="sort-down"
              ></font-awesome-icon>
            </span>
            <font-awesome-icon
              v-else
              class="file-icon"
              icon="file"
            ></font-awesome-icon>
            {{ node.name }}
          </div>
          <div class="c-2 node-size">
            {{
              !hasChildren
                ? (node.size / 1024).toFixed(2) + " MB"
                : (folderSize / 1024).toFixed(2) + " MB"
            }}
          </div>
          <div class="c-2 node-type">{{ hasChildren ? "dir" : type }}</div>
          <div class="c-2 node-items">
            {{ hasChildren ? "items: " + itemsInFolder : "-" }}
          </div>
        </div>
      </div>
    </div>

    <span class="tree-item-wrapper" v-if="expanded">
      <TreeGridItem
        v-for="child in node.children"
        :key="child.name"
        :node="child"
        :depth="depth + 1"
      ></TreeGridItem>
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
      expanded: false,
      folderSize: 0,
      itemsInFolder: 0
    };
  },
  computed: {
    hasChildren() {
      return this.node.children;
    },
    type() {
      return this.node.name.split(".")[this.node.name.split(".").length - 1];
    }
  },
  methods: {
    countElementsSize(nodeItem) {
      if (nodeItem.children) {
        this.lodash.forIn(nodeItem.children, (value, key) => {
          if (!value.children) this.folderSize += value.size;
          else {
            this.countElementsSize(value);
          }
        });
      }
    },
    countInnerItems(nodeItem) {
      if (nodeItem.children) {
        this.lodash.forIn(nodeItem.children, (value, key) => {
          if (!value.children) this.itemsInFolder += 1;
          else {
            this.itemsInFolder += 1;
            this.countInnerItems(value);
          }
        });
      }
    }
  },
  mounted: function() {
    this.countElementsSize(this.node, 0);
    this.countInnerItems(this.node);
  }
};
</script>
<style lang="scss" scoped>
.node-name {
  cursor: pointer;
}

.node-wrapper {
  border-bottom: 1px solid #eaeaea;
  .node-name {
    padding: 20px 16px;
    color: #2e2e2e;
    font-size: 18px;
    span {
      font-awesome-icon {
        vertical-align: top;
        padding-right: 5px;
      }
    }
  }
}
.node-size,
.node-type,
.node-items {
  padding: 20px 16px;
  font-size: 14px;
}
.arrow {
  margin-right: 10px;
}
.file-icon {
  margin-right: 10px;
  font-size: 16px;
  color: #656565;
}
.not-expanded-arrow {
  transform: rotate(-90deg);
}
.type {
  color: #414141;
}
</style>
