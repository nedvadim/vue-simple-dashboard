<template>
  <div>
    <app-header></app-header>
    <div class="page-content">
      <app-side-menu></app-side-menu>
      <div class="my-container">
        <div class="my-row">
          <div class="box c-1">1</div>
          <div class="box c-2">2</div>
          <div class="box c-9">9</div>
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
@import "./style/grid.css";

* {
  font-family: "Varela Round", sans-serif;
  font-size: 20px;
  color: rgb(77, 77, 77);
}
.box {
  background-color: khaki;
}
.page-content {
  display: flex;
}
</style>
