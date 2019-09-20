<template>
  <div class="app-bg">
    <app-header></app-header>
    <div class="page-content">
      <app-side-menu></app-side-menu>
      <div class="my-container">
        <div class="my-row">
          <router-view class="c-12"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
//import Home from "./components/Home.vue";
import SideMenu from "./components/side-menu/SideMenu.vue";
import Header from "./components/header/Header.vue";
export default {
  components: {
    appSideMenu: SideMenu,
    appHeader: Header
    //appHome: Home
  },
  created() {
    this.$store.dispatch("initSideBarContent");
  }
};
</script>

<style lang="scss">
@import "./style/grid-mobile-first.css";

* {
  font-family: "Lato", sans-serif;
  font-size: 20px;
  color: rgb(77, 77, 77);
}
.page-content {
  display: flex;
  padding-left: 150px;
}
.app-bg {
  background-color: #a0a0a0;
  height: 100%;
  min-height: 100vh;
}
</style>
