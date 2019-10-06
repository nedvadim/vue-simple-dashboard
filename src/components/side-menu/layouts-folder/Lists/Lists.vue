<template>
  <div>
    <div class="lists-page-wrapper">
      <div class="my-container">
        <div class="my-row">
          <app-list-one class="c-12 c-md-6"></app-list-one>
          <app-list-two class="c-12 c-md-6" :content="listContent"></app-list-two>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import listOne from "./list1.vue";
import listTwo from "./list2.vue";
export default {
  components: {
    appListOne: listOne,
    appListTwo: listTwo
  },
  computed: {
    listContent() {
      return this.$store.getters.list2Content;
    }
  }
};
</script>
<style lang="scss" scoped>
.lists-page-wrapper {
  width: 100%;
  margin: 1.5em auto;
}
</style>