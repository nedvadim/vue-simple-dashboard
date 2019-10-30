<template>
  <div>
    <table id="smartTable">
      <tr class="headers">
        <td>Actions</td>
        <td>ID</td>
        <td>First Name</td>
        <td>Last Name</td>
        <td>Username</td>
        <td>E-mail</td>
        <td>Age</td>
      </tr>

      <tr class="searchControls">
        <td>
          <my-btn type="info" @click.native="showAddPanel = !showAddPanel">Add</my-btn>
        </td>
        <td>
          <my-inp inputPlaceholder="ID"></my-inp>
        </td>
        <td>
          <my-inp inputPlaceholder="First Name"></my-inp>
        </td>
        <td>
          <my-inp inputPlaceholder="Last Name"></my-inp>
        </td>
        <td>
          <my-inp inputPlaceholder="Username"></my-inp>
        </td>
        <td>
          <my-inp inputPlaceholder="E-mail"></my-inp>
        </td>
        <td>
          <my-inp inputPlaceholder="Age"></my-inp>
        </td>
      </tr>

      <tr v-if="showAddPanel" class="addRowControls">
        <td>
          <div class="add" @click="addRow()">V</div>
          <div class="cancelAdd">X</div>
        </td>
        <td>
          <my-inp inputPlaceholder="ID" v-model="addedRow.id"></my-inp>
        </td>
        <td>
          <my-inp inputPlaceholder="First Name" v-model="addedRow.firstName"></my-inp>
        </td>
        <td>
          <my-inp inputPlaceholder="Last Name" v-model="addedRow.lastName"></my-inp>
        </td>
        <td>
          <my-inp inputPlaceholder="Username" v-model="addedRow.username"></my-inp>
        </td>
        <td>
          <my-inp inputPlaceholder="E-mail" v-model="addedRow.email"></my-inp>
        </td>
        <td>
          <my-inp inputPlaceholder="Age" v-model="addedRow.age"></my-inp>
        </td>
      </tr>

      <tr v-for="row in tableContent" :key="row.id">
        <td class="editAndDelete">
          <div class="edit">
            <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
          </div>
          <div class="delete">
            <font-awesome-icon icon="trash-alt"></font-awesome-icon>
          </div>
        </td>
        <td>{{row.id}}</td>
        <td>{{row.firstName}}</td>
        <td>{{row.lastName}}</td>
        <td>{{row.username}}</td>
        <td>{{row.email}}</td>
        <td>{{row.age}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
// #1e97ff
import myBtn from "../../forms-folder/Buttons/ButtonItem";
import myInp from "../../forms-folder/FormInputs/TextInputItem";
export default {
  data() {
    return {
      tableContent: this.content,
      showAddPanel: true,
      addedRow: {
        id: "", // check to be number when added
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        age: "" // check to be number when added
      }
    };
  },
  props: {
    content: {
      type: Array
    },
    fieldOne: "",
    fieldTwo: "",
    fieldThree: "",
    fieldFour: "",
    fieldFive: ""
  },
  components: {
    myBtn,
    myInp
  },
  computed: {
    getTableData() {
      return this.tableContent;
    }
  },
  methods: {
    addRow() {
      this.$emit("addToTable", this.addedRow);
      this.showAddPanel = false;
      //this.tableContent.push(this.addedRow);

      this.resetAddedRow();
    },
    resetAddedRow() {
      this.addedRow.id = "";
      this.addedRow.firstName = "";
      this.addedRow.lastName = "";
      this.addedRow.username = "";
      this.addedRow.email = "";
      this.addedRow.age = "";
    }
  },
  watch: {
    getTableData: function() {
      console.log("table change!");
    }
  }
};
</script>
<style lang="scss" scoped>
#smartTable,
table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  border: 1px solid #ececec;
  background-color: white;
  font-size: 20px;
  tr {
    border-collapse: collapse;
    text-align: center;
    border: 1px solid #ececec;
    font-size: 20px;
    td {
      border-collapse: collapse;
      text-align: center;
      border: 1px solid #ececec;
      font-size: 20px;
      padding: 10px;
    }
  }
}
.headers {
  td {
    background-color: $info-color;
    color: white;
    border: none !important;
  }
}
.addRowControls {
  .add,
  .cancelAdd {
    width: 100%;
    height: 100%;
    border: 2px solid red;
    cursor: pointer;
  }
  .add {
    border: 2px solid green;
  }
}
.editAndDelete {
  display: flex;
  .edit,
  .delete {
    width: 50%;
    cursor: pointer;
  }
  .edit {
    color: gray;
    &:hover {
      color: $info-color;
    }
  }
  .delete {
    color: gray;
    &:hover {
      color: $danger-color;
    }
  }
}
</style>
