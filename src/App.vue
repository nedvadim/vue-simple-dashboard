<template>
  <div>
    <app-side-menu></app-side-menu>
  </div>
</template>


<script>
import SideMenu from "./components/side-menu/SideMenu.vue";
export default {
  components: {
    appSideMenu: SideMenu
  },
  created() {
    this.$store.dispatch("initSideBarContent");
  }
};
</script>

<style>
* {
  font-family: "Varela Round", sans-serif;
  font-size: 20px;
}
</style>
