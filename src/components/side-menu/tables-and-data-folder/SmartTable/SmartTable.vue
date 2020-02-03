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
      testFields: {
        one: [
          { title: "ID", keyName: "id" },
          { title: "Name", keyName: "name" },
          { title: "Nickname", keyName: "nickname" }
        ],
        two: [
          { title: "ID", keyName: "id" },
          { title: "First Name", keyName: "firstName" },
          { title: "Last Name", keyName: "lastName" },
          { title: "Username", keyName: "username" },
          { title: "E-Mail", keyName: "email" },
          { title: "Age", keyName: "age" }
        ],
        three: [
          { title: "ID", keyName: "id" },
          { title: "Make", keyName: "make" },
          { title: "Model", keyName: "model" },
          { title: "Year", keyName: "year" },
          { title: "Mileage", keyName: "mileage" },
          { title: "Body Type", keyName: "bodyType" },
          { title: "Price", keyName: "price" }
        ]
      },
      testContent: {
        one: [
          {
            id: 1,
            name: "Taras",
            nickname: "bowlingPro"
          },
          {
            id: 2,
            name: "Igor",
            nickname: "negevExpert"
          },
          {
            id: 3,
            name: "Vadim",
            nickname: "vadim"
          }
        ],
        two: [
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
          },
          {
            id: 7,
            firstName: "Wesley",
            lastName: "Knox",
            username: "wk37",
            email: "wes@yahoo.com",
            age: 37
          },
          {
            id: 8,
            firstName: "Hannah",
            lastName: "Harold",
            username: "annie",
            email: "hannahh@gmail.com",
            age: 29
          },
          {
            id: 9,
            firstName: "Jack",
            lastName: "Kniev",
            username: "knievJK",
            email: "jackcoolman@gmail.com",
            age: 19
          }
        ],
        three: [
          {
            id: 1,
            make: "Toyota",
            model: "Prius",
            year: 2009,
            mileage: 89443,
            bodyType: "hatch",
            price: 6900
          },
          {
            id: 2,
            make: "BMW",
            model: "320i",
            year: 2013,
            mileage: 38122,
            bodyType: "sedan",
            price: 13500
          },
          {
            id: 3,
            make: "Toyota",
            model: "Corolla",
            year: 2004,
            mileage: 478121,
            bodyType: "sedan",
            price: 15000
          },
          {
            id: 4,
            make: "Nissan",
            model: "X-Trail",
            year: 2010,
            mileage: 93765,
            bodyType: "SUV",
            price: 7800
          },
          {
            id: 5,
            make: "Honda",
            model: "CR-V",
            year: 2017,
            mileage: 7200,
            bodyType: "SUV",
            price: 13300
          },
          {
            id: 6,
            make: "Volkswagen",
            model: "Touareg",
            year: 2007,
            mileage: 142032,
            bodyType: "SUV",
            price: 9000
          },
          {
            id: 7,
            make: "Fiat",
            model: "500",
            year: 2015,
            mileage: 24273,
            bodyType: "hatch",
            price: 6500
          }
        ]
      },
      tableFields: [
        { title: "ID", keyName: "id" },
        { title: "First Name", keyName: "firstName" },
        { title: "Last Name", keyName: "lastName" },
        { title: "Username", keyName: "username" },
        { title: "E-Mail", keyName: "email" },
        { title: "Age", keyName: "age" }
      ],
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
        },
        {
          id: 7,
          firstName: "Wesley",
          lastName: "Knox",
          username: "wk37",
          email: "wes@yahoo.com",
          age: 37
        },
        {
          id: 8,
          firstName: "Hannah",
          lastName: "Harold",
          username: "annie",
          email: "hannahh@gmail.com",
          age: 29
        },
        {
          id: 9,
          firstName: "Jack",
          lastName: "Kniev",
          username: "knievJK",
          email: "jackcoolman@gmail.com",
          age: 19
        }
      ]
    };
  },
  methods: {
    add(row) {
      // TODO FIX ADD (without var)
      this.content.unshift(this.lodash.cloneDeep(row));
    },
    deleteElement(idValue) {
      console.log(
        `element: ${this.content.filter(x => x.id == idValue)[0].id}`
      );
      this.content.splice(
        this.content.findIndex(x => x.id == idValue),
        1
      );
    },
    editElement(element, index) {
      this.content[index] = this.lodash.cloneDeep(element);
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