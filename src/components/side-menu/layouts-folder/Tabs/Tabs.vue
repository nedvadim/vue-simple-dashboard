<template>
  <div class="tabs-wrapper">
    <div class="my-container">
      <div class="my-row">
        <app-tab-one class="c-12 c-md-6" :tabData="tab1Data"></app-tab-one>
        <app-tab-two class="c-12 c-md-6" :tabData="tab2Data"></app-tab-two>
      </div>
    </div>
  </div>
</template>

<script>
import tabOne from "./tab1";
import tabTwo from "./tab2";
export default {
  data() {
    return {
      tab1Data: [
        { id: 1, tabName: "Tab1", tabContent: "Hello world!" },
        { id: 2, tabName: "Tab2", tabContent: "What's up world?" },
        { id: 3, tabName: "Tab3", tabContent: "Ok world!" }
      ],
      tab2Data: [
        { id: 1, tabName: "Route-Tab1", tabLink: "/tabs/route-tab-1" },
        { id: 2, tabName: "Route-Tab2", tabLink: "/tabs/route-tab-2" }
      ]
    };
  },
  components: {
    appTabOne: tabOne,
    appTabTwo: tabTwo
  }
};
</script>
<style lang="scss" scoped>
.tabs-wrapper {
  width: 95%;
  margin: 1.5em auto;
}
</style>