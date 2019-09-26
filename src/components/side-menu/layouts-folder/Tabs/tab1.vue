<template>
  <div class="tabs-wrapper">
    <div class="tabs">
      <div
        class="tab"
        v-for="(t, index) in tabNames"
        @click="setContent(index); setTabActive(index)"
        v-bind:class="{tabActive: isThatTabActive(index)}"
      >
        <p>{{t}}</p>
      </div>
    </div>
    <div class="tab-content">{{tabContent[currentContentNumber]}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabNames: ["Tab1", "Tab2", "Tab3"],
      tabContent: [
        "A function serves as a closure in JavaScript, and thus creates a scope, so that (for example) a variable defined exclusively within the function cannot be accessed from outside the function or within other functions.",
        "If a variable or other expression is not in the current scope, then it is unavailable for use.",
        "Difficulties arise in name masking, forward declarations, and hoisting, while considerably subtler ones arise with non-local variables, particularly in closures."
      ],
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
  background-color: #f5f5f5;
  padding: 15px;
  height: fit-content;
  .tabs {
    display: flex;
    border-bottom: 1px solid #d8d8d8;
    width: 100%;

    .tab {
      width: 20%;
      text-align: center;
      border-bottom: 3px solid #f5f5f5;
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
  }
}
</style>