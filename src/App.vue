<template>
  <div class="app-bg">
    <app-header></app-header>
    <div class="page-content">
      <app-side-menu></app-side-menu>
      <div class="my-container">
        <div class="my-row">
          <transition name="slide" mode="out-in">
            <router-view class="c-12"></router-view>
          </transition>
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
    this.$store.dispatch("initListTwoContent");
  }
};
</script>

<style lang="scss">
@import "./style/grid-mobile-first.css";
$top-margin: 1.5em;

* {
  font-family: "Lato", sans-serif;
  font-size: 20px;
  //color: #4d4d4d;
}
.page-content {
  display: flex;
  padding: 0 10px 0 165px;
  padding-top: 7vh;
}
.app-bg {
  background-color: #e8e8e8;
  height: 100%;
  min-height: 100vh;
}

.slide-enter-active {
  animation: slide-in 100ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 100ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
