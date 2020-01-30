<template>
  <div class="tabs-wrapper">
    <div class="tabs">
      <router-link
        class="tab"
        v-for="(data, index) in tabData"
        :key="data.id"
        :to="data.tabLink"
        tag="div"
      >
        <p
          @click="setContent(index); setTabActive(index)"
          :class="{tabActive: isThatTabActive(index)}"
        >{{data.tabName}}</p>
      </router-link>
    </div>
    <div class="tab-content">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  props: ["tabData"],
  data() {
    return {
      currentContentNumber: 0,
      tabActivness: [] // which of tabs are active. filled on created hook, so size depends on tab elements
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
  },
  created: function() {
    this.tabData.forEach(element => {
      this.tabActivness.push(false);
    });
    this.tabActivness[0] = true; // making a first tab active
  }
};
</script>
<style lang="scss" scoped>
.fade-enter-active {
  transition: all 0.2s ease-in;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.tabs-wrapper {
  background-color: $component-bg-color;
  height: fit-content;
  .tabs {
    display: flex;
    border-bottom: 1px solid inherit;
    width: $component-width;

    .tab {
      width: 25%;
      text-align: center;
    }
    p {
      font-size: 16px;
      font-weight: 700;
      padding: 6px 0;
      cursor: pointer;
      border-bottom: 3px solid inherit;
      &:hover {
        border-bottom: 3px solid #3366ff;
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