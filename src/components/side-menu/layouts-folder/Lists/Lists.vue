<template>
  <div>
    <div class="my-container">
      <div class="my-row">
        <app-list-one class="c-12 c-md-6" :content="listOneData"></app-list-one>
        <app-list-two class="c-12 c-md-6" :content="listTwoData"></app-list-two>
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
  },
  data() {
    return {
      listOneData: {
        title: "Countries",
        list: [
          "Austria",
          "Japan",
          "Hungary",
          "USA",
          "Israel",
          "Slovakia",
          "France",
          "Canada",
          "Iran",
          "Bulgaria",
          "India"
        ]
      },
      listTwoData: {
        title: "Legends",
        list: [
          {
            name: "Jimmy Page",
            description: "Guitarist"
          },
          {
            name: "John Bonham",
            description: "Drummer"
          },
          {
            name: "Robert Plant",
            description: "Vocalist"
          },
          {
            name: "Les Claypool",
            description: "Bassist"
          },
          {
            name: "Jimmy Hendrix",
            description: "Guitarist"
          },
          {
            name: "Ozzy Osbourne",
            description: "Vocalist"
          },
          {
            name: "Angus Young",
            description: "Guitarist"
          }
        ]
      }
    };
  }
};
</script>
<style lang="scss" scoped>
</style>