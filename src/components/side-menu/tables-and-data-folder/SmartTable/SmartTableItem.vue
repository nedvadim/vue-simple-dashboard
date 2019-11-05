<template>
  <div>
    <table id="smartTable">
      <tr class="headers">
        <td>Actions</td>
        <td v-for="(nameField, index) in fields" :key="index">{{nameField.title}}</td>
      </tr>

      <tr class="searchControls">
        <td>
          <my-btn class="addButton" type="info" @click.native="showAddPanel = !showAddPanel">
            <font-awesome-icon icon="plus"></font-awesome-icon>
          </my-btn>
        </td>

        <td v-for="(nameField, index) in fields" :key="index">
          <my-inp
            :inputPlaceholder="nameField.title"
            @input.native="search($event, nameField.keyName)"
            v-model="searchObject[nameField.keyName]"
          ></my-inp>
        </td>
      </tr>

      <tr v-if="showAddPanel" class="addRowControls">
        <td>
          <my-btn :outline="true" type="success" class="add" @click.native="addRow">
            <font-awesome-icon icon="check"></font-awesome-icon>
          </my-btn>
          <my-btn
            :outline="true"
            type="danger"
            class="cancelAdd"
            @click.native="showAddPanel = !showAddPanel"
          >
            <font-awesome-icon icon="times"></font-awesome-icon>
          </my-btn>
        </td>
        <td v-for="(nameField, index) in fields" :key="index">
          <my-inp :inputPlaceholder="nameField.title" v-model="addedRow[nameField.keyName]"></my-inp>
        </td>
      </tr>

      <tr v-for="(row, index) in tableContent" :key="row.index" :class="{darkerRow: (index%2==0)}">
        <td class="editAndDelete">
          <div class="edit">
            <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
          </div>
          <div class="delete">
            <font-awesome-icon icon="trash-alt"></font-awesome-icon>
          </div>
        </td>
        <td v-for="(field, index) in fields" :key="index">{{row[field.keyName]}}</td>
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
      enteredInSearch: {},
      addedRow: {},
      searchObject: {}
    };
  },
  props: {
    content: {
      type: Array
    },
    fields: {
      type: Array
    }
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
    getLowerCaseString(value) {
      return value.toString().toLowerCase();
    },
    isSearchObjectEmpty() {
      var empty = true;
      for (var field in this.searchObject) {
        if (this.searchObject[field]) {
          empty = false;
          break;
        }
      }
      return empty;
    },
    addRow() {
      // make string numbers a pure numbers
      // isNaN() and parseInt();
      this.$emit("addToTable", this.addedRow);
      this.showAddPanel = false;
      //this.tableContent.push(this.addedRow);
      this.resetAddedRow();
      this.tableContent = this.content;
    },
    resetAddedRow() {
      for (var field in this.addedRow) {
        this.addedRow[field] = "";
      }
    },
    search(event, value) {
      var tempTableContent = [];
      var fieldsToSearchIn = [];

      for (var field in this.searchObject) {
        if (this.searchObject[field]) {
          fieldsToSearchIn.push(field);
        }
      }

      for (var i = 0; i < this.content.length; i++) {
        var same = true;
        for (var j = 0; j < fieldsToSearchIn.length; j++) {
          var dataInContentObj = this.getLowerCaseString(
            this.content[i][fieldsToSearchIn[j]]
          );
          var dataInSearchObj = this.getLowerCaseString(
            this.searchObject[fieldsToSearchIn[j]]
          );
          if (!dataInContentObj.includes(dataInSearchObj)) {
            same = false;
          }
        }

        if (same) {
          tempTableContent.push(this.content[i]);
        }
      }

      if (tempTableContent.length > 0) {
        this.tableContent = tempTableContent;
        //tempTableContent = [];
      } else {
        if (this.isSearchObjectEmpty()) {
          this.tableContent = this.content;
        } else {
          this.tableContent = [];
        }
      }
    }
  },
  mounted: function() {
    // for (var i = 0; i < this.fields.length; i++) {
    //   this.searchObject[this.fields[i].keyName] = "";
    // }
    console.log(this.lodash.random(10));
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
    &:hover {
      opacity: 0.8;
    }
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
    color: $danger-color;
    font-size: 20px;
    cursor: pointer;
  }
  .add {
    color: $success-color;
  }

  .succes,
  .add {
    margin-bottom: 8px;
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
.addButton {
  width: 100%;
}
.darkerRow {
  background-color: #f9f9f9;
}
</style>
