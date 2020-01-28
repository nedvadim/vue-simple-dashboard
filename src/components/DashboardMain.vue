<template>
  <div class="app-bg">
    <app-header :hamburgerOn="hamburgerOn" @toggleham="toggleHamburger"></app-header>
    <transition name="slide" mode="out-in">
      <app-side-menu class="menu-for-mobile" v-if="hamburgerOn" @closeSideMenu="toggleHamburger"></app-side-menu>
    </transition>
    <div class="page-content">
      <app-side-menu class="menu-for-desktop" v-if="!hamburgerOn"></app-side-menu>
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
import SideMenu from "./side-menu/SideMenu.vue";
import Header from "./header/Header.vue";
import Home from "./Home";
export default {
  data() {
    return {
      hamburgerOn: false
    };
  },
  components: {
    appSideMenu: SideMenu,
    appHeader: Header,
    appHome: Home
  },
  created() {
    this.$store.dispatch("initSideBarContent");
    this.$store.dispatch("initListTwoContent");
  },
  methods: {
    toggleHamburger() {
      this.hamburgerOn = !this.hamburgerOn;
    }
  }
};
</script>

<style lang="scss">
@import "../style/grid-mobile-first.css";
$top-margin: 1.5em;

* {
  font-family: "Lato", sans-serif;
  font-size: 20px;
}
.page-content {
  display: flex;
  padding-top: calc(#{$header-height} + #{$gap-size});
  padding-right: 1.2em;
  padding-left: 1.2em;
}
.app-bg {
  background-color: #f9f9f9;
  height: 100%;
  min-height: 100vh;
}

.slide-enter-active {
  animation: slide-in 100ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 100ms ease-out forwards;
}
.menu-for-desktop {
  display: none;
}
.menu-for-mobile {
  display: block;
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

@media only screen and (min-width: 960px) {
  .page-content {
    display: flex;
    padding: 4.5em 1.2em 0 255px;
  }
  .menu-for-desktop {
    display: block;
  }
}
// #0072ff
</style>
