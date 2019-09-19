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
  background: rgb(245, 245, 245);
  height: 93vh;
  width: 150px;
  box-shadow: 2px 1px 7px -5px #000;
}
</style>