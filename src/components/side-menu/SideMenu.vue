<template>
  <div class="sidebar-container">
    <app-item v-for="s in sidebarContent" :content="s" :key="s.id" @closeMenu="closeMenu"></app-item>
  </div>
</template>
 
<script>
import SideMenuItem from "./SideMenuItem";
export default {
  components: {
    appItem: SideMenuItem
  },
  computed: {
    sidebarContent() {
      return this.$store.getters.sidebarContent;
    }
  },
  methods: {
    closeMenu(event) {
      this.$emit("closeSideMenu");
    }
  }
};
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.sidebar-container {
  position: fixed;
  left: 0;
  top: $header-height;
  overflow-x: scroll;
  background: rgb(255, 255, 255);
  height: 90vh;
  width: 100%;
  box-shadow: 2px 1px 7px -5px #000;
  z-index: 10; /* ? */
}

@media only screen and (min-width: 960px) {
  .sidebar-container {
    position: fixed;
    left: 0;
    top: 70px;
    overflow-x: scroll;
    background: rgb(255, 255, 255);
    height: 93vh;
    width: 230px;
    box-shadow: 2px 1px 7px -5px #000;
    z-index: 10; /* ? */
  }
}
</style>