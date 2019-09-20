<template>
  <div>
    <div class="my-container">
      <div class="my-row">
        <app-list-one class="c-12 c-md-6"></app-list-one>
        <app-list-one class="c-12 c-md-6"></app-list-one>
      </div>
    </div>
  </div>
</template>

<script>
import listOne from "./list1.vue";
export default {
  components: {
    appListOne: listOne
  }
};
</script>
<style lang="scss">
</style>