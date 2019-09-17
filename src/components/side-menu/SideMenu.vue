<template>
  <div class="container">
    <app-item v-for="s in sidebarContent" :content="s"></app-item>
  </div>
</template>

<script>
import SideMenuItem from "./SideMenuItem";
//import { mapGetters } from "vuex";
export default {
  components: {
    appItem: SideMenuItem
  },
  computed: {
    sidebarContent() {
      return this.$store.getters.sidebarContent;
    }
  }
};
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  background: rgb(214, 214, 214);
  height: 100vh;
  width: 10%;
  box-shadow: 2px 0px 6px -4px #000;
}
</style>