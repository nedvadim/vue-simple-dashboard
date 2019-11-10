<template>
  <div class="my-container">
    <div class="my-row margin-top">
      <smart-t
        class="c-12 my-table"
        :content="content"
        :fields="tableFields"
        @addToTable="add"
        @deleteFromTable="deleteElement"
        @editTableRow="editElement"
      ></smart-t>
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
      tableFields: [
        { title: "ID", keyName: "id" },
        { title: "First Name", keyName: "firstName" },
        { title: "Last Name", keyName: "lastName" },
        { title: "Username", keyName: "username" },
        { title: "E-Mail", keyName: "email" },
        { title: "Age", keyName: "age" }
      ],
      //testing array
      // [
      //   { title: "ID", keyName: "id" },
      //   { title: "Name", keyName: "name" },
      //   { title: "Nickname", keyName: "nickname" }
      // ],
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
        },
        {
          id: 6,
          firstName: "Frank",
          lastName: "Wilson",
          username: "will",
          email: "fw@yahoo.com",
          age: 25
        }
      ]
      // testing array
      // [
      //   {
      //     id: 228,
      //     name: "Vasya",
      //     nickname: "dotaNakat"
      //   },
      //   {
      //     id: 100500,
      //     name: "Ruslan",
      //     nickname: "rusak"
      //   },
      //   {
      //     id: 888,
      //     name: "Jora",
      //     nickname: "joraaa"
      //   }
      // ]
    };
  },
  methods: {
    logAll() {
      // for testing purposes
      console.log("|||||||||||||||||||||||||||||||||||||||||");
      this.lodash.forIn(this.content, (value, key) => {
        console.log("----------------------------------------");
        console.log("index: " + this.lodash.indexOf(this.content, value));
        this.lodash.forIn(value, (value1, key) => {
          console.log(value1);
        });
      });
    },
    add(row) {
      // TODO FIX ADD (without var)
      this.content.unshift(this.lodash.cloneDeep(row));
    },
    deleteElement(idValue) {
      this.content.splice(this.content.findIndex(x => x.id == idValue), 1);
    },
    editElement(element, index) {
      this.content[index] = this.lodash.cloneDeep(element);
      console.log(element + " // " + index);
    }
  },
  mounted: function() {}
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