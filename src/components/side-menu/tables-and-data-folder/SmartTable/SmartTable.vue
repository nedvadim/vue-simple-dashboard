<template>
  <div class="my-container">
    <div class="my-row margin-top">
      <smart-t class="c-12 my-table" :content="content" @addToTable="add"></smart-t>
    </div>
  </div>
</template>
<script>
import smartT from "./SmartTableItem";
export default {
  components: {
    smartT
  },
  data() {
    return {
      content: [
        {
          id: 1,
          firstName: "Jack",
          lastName: "Knox",
          username: "superDUDE",
          email: "knox@mail.com",
          age: 34
        },
        {
          id: 2,
          firstName: "Nancy",
          lastName: "Liverpool",
          username: "superGIRL",
          email: "lpool@gmail.com",
          age: 23
        },
        {
          id: 3,
          firstName: "Frank",
          lastName: "Jackson",
          username: "rock229",
          email: "jackie@yahoo.com",
          age: 40
        },
        {
          id: 4,
          firstName: "Mason",
          lastName: "Vonleh",
          username: "beattle2000",
          email: "mas@gmail.com",
          age: 19
        },
        {
          id: 5,
          firstName: "Harry",
          lastName: "Potter",
          username: "TheChosenOne",
          email: "f-ckSlitherin@gmail.com",
          age: 18
        }
      ]
    };
  },
  methods: {
    add(row) {
      var temp = {
        id: row.id,
        firstName: row.firstName,
        lastName: row.lastName,
        username: row.username,
        email: row.email,
        age: row.age
      };
      this.content.push(temp);
    }
  }
};
</script>
<style lang="scss" scoped>
.margin-top {
  smart-t,
  .my-table {
    margin-top: 20px;
    //overflow: scroll;
  }
}
</style>