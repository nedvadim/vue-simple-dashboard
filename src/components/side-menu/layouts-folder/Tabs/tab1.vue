<template>
  <div class="tabs-wrapper">
    <div class="tabs">
      <div
        class="tab"
        v-for="(data, index) in tabData"
        :key="data.id"
        @click="setContent(index); setTabActive(index)"
        :class="{tabActive: isThatTabActive(index)}"
      >
        <p>{{data.tabName}}</p>
      </div>
    </div>
    <div class="tab-content">{{tabData[currentContentNumber].tabContent}}</div>
  </div>
</template>
<script>
export default {
  props: ["tabData"],
  data() {
    return {
      currentContentNumber: 0,
      tabActivness: [true, false, false] // which of tabs are active
    };
  },

  methods: {
    setContent(tabContentNumber) {
      this.currentContentNumber = tabContentNumber;
    },
    setTabActive(tabNumber) {
      for (var e in this.tabActivness) {
        this.tabActivness[e] = false;
      }
      this.tabActivness[tabNumber] = true;
    },
    isThatTabActive(index) {
      return this.tabActivness[index];
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.tabs-wrapper {
  background-color: $component-bg-color;
  height: fit-content;
  .tabs {
    display: flex;
    width: $component-width;

    .tab {
      width: 20%;
      text-align: center;
      border-bottom: 3px solid inherit;
      &:hover {
        border-bottom: 3px solid #3366ff;
      }
      p {
        font-size: 16px;
        font-weight: 700;
        padding: 6px 0;
        cursor: pointer;
      }
    }
    .tabActive {
      border-bottom: 3px solid #3366ff;
    }
  }
  .tab-content {
    padding-top: 15px;
    font-size: 16px;
  }
}
</style>