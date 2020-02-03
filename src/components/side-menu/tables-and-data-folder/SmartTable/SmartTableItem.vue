<template>
  <div>
    <table id="smartTable">
      <tr class="headers">
        <td>Actions</td>
        <td v-for="(nameField, index) in fields" :key="index">{{nameField.title}}</td>
      </tr>

      <!-- SEARCH SECTION -->
      <tr class="searchControls">
        <td>
          <my-btn class="addButton" type="info" @click.native="showAddPanel = !showAddPanel">
            <font-awesome-icon icon="plus"></font-awesome-icon>
          </my-btn>
        </td>
        <td v-for="(nameField, index) in fields" :key="index">
          <my-inp
            :inputPlaceholder="nameField.title"
            :inputValue="searchObject[nameField.keyName]"
            @input.native="search($event, nameField.keyName)"
            v-model="searchObject[nameField.keyName]"
          ></my-inp>
        </td>
      </tr>
      <!-- ADD SECTION -->
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
          <p>{{addedRow[nameField.keyName]}}</p>
        </td>
      </tr>
      <!--  DATA & EDIT SECTION -->
      <tr v-for="(row, index) in tableContent" :key="row.index" :class="{darkerRow: (index%2==0)}">
        <td>
          <span class="editAndDelete" v-if="!editModes[content.findIndex(el => el.id === row.id)]">
            <div class="edit" @click="turnOnEditMode(row.id)">
              <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
            </div>
            <div class="delete" @click="deleteRow(row.id, index)">
              <font-awesome-icon icon="trash-alt"></font-awesome-icon>
            </div>
          </span>
          <span
            class="acceptAndCancelButtons"
            v-if="editModes[content.findIndex(el => el.id === row.id)]"
          >
            <div
              class="acceptEditBtn"
              @click="acceptEdit(editedRows[content.findIndex(el => el.id === row.id)], content.findIndex(el => el.id === row.id))"
            >
              <font-awesome-icon icon="check"></font-awesome-icon>
            </div>
            <div
              class="cancelEditBtn"
              @click="turnOffEditMode(content.findIndex(el => el.id === row.id))"
            >
              <font-awesome-icon icon="times"></font-awesome-icon>
            </div>
          </span>
        </td>
        <td v-for="(field, indexCell) in fields" :key="indexCell">
          <!-- Table data renders in that span -->
          <span v-if="!editModes[content.findIndex(el => el.id === row.id)]">{{row[field.keyName]}}</span>
          <my-inp
            v-if="editModes[content.findIndex(el => el.id === row.id)]"
            :inputValue="editedRows[content.findIndex(el => el.id === row.id)][field.keyName].toString()"
            size="small"
            :inputPlaceholder="row[field.keyName].toString()"
            v-model="editedRows[content.findIndex(el => el.id === row.id)][field.keyName]"
          ></my-inp>
        </td>
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
      // tableContent - main array that holds what should be displayed in table.
      tableContent: this.content,
      showAddPanel: false,

      // In addedRow object we put values from inputs in the ADD section
      // and then emit it with add event in addRow() func
      addedRow: {},

      // searchObject contains names of fields by which search() is performed
      // and a values that a searched. If you you search by firstName and you search "Jack",
      // than object will contain only - fisrtName: "Jack"
      searchObject: {},

      editedRows: [],

      // In editModes we store current edit modes for all rows in table.
      // If some row is in the edit mode,
      // than in editModes array would be true by that index
      editModes: []
    };
  },
  props: {
    content: {
      // an array from which all data comes
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
  methods: {
    rerenderTable() {
      var table = this.tableContent;
      this.tableContent = [];
      this.tableContent = table;
    },
    acceptEdit(row, index) {
      this.turnOffEditMode(index, row);
      this.$emit("editTableRow", row, index);
      this.search();
    },
    turnOnEditMode(rowId) {
      console.log(
        "contID" +
          this.content[this.content.findIndex(el => el.id === rowId)].id
      );
      console.log(this.content.findIndex(el => el.id === rowId));
      this.editModes[this.content.findIndex(el => el.id === rowId)] = true;

      this.rerenderTable();
    },
    turnOffEditMode(index, row) {
      this.editModes[index] = false;
      this.rerenderTable();
    },
    deleteRow(id, index) {
      console.log(id);
      //disable delete func, when there is true in EditMode, or reset all editModes to false and then delete.
      for (let i = 0; i < this.editModes.length; i++) {
        // if (!isSearchObjectEmpty()) {
        //   // reset search object to be empty
        // }
        this.editModes[i] = false;
      }

      this.$emit("deleteFromTable", id);
      this.editModes.splice(index, 1);

      //reset edited rows as well to delete a row that not exist now
      var tempTableContent = this.tableContent.filter(el => el.id !== id);
      this.editedRows = this.lodash.cloneDeep(this.tableContent);
      console.log("===========================");
      this.editedRows.forEach(r => console.log(r.id + " " + r.firstName));

      this.tableContent = this.content;
      this.tableContent = this.tableContent;
      this.rerenderTable();
      //delete from edited rows
    },
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
      for (var field in Object.values(this.addedRow)) {
        if (Object.values(this.addedRow)[field] === "") {
          alert("Fill all cells in the row, please");
          return;
        }
      }
      this.$emit("addToTable", this.addedRow);
      this.editedRows = this.lodash.cloneDeep(this.tableContent);
      this.showAddPanel = false;
      this.resetAddedRow();
      this.tableContent = this.content;
      this.tableContent = this.tableContent;
      this.rerenderTable();
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
        console.log(this.searchObject);
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
      } else {
        this.tableContent = [];
      }
      if (this.isSearchObjectEmpty()) {
        this.tableContent = this.content;
      }
    }
  },
  mounted: function() {
    // Initialize editModes array
    this.lodash.forIn(this.tableContent, (value, key) => {
      this.editModes[key] = false;
    });

    // Initialize empty addedRow which is used to add new element to table
    this.lodash.forIn(this.fields, (value, key) => {
      this.addedRow[this.fields[key].keyName] = "";
    });

    this.editedRows = this.lodash.cloneDeep(this.tableContent);
  }
};
</script>
<style lang="scss" scoped>
#smartTable,
table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ececec;
  background-color: white;
  font-size: 20px;
  tr {
    border-collapse: collapse;
    border: 1px solid #ececec;
    font-size: 20px;
    &:hover {
      opacity: 0.8;
    }
    td {
      border-collapse: collapse;
      min-width: 70px;
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
    text-align: center;
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
.acceptAndCancelButtons {
  display: flex;
  .acceptEditBtn,
  .cancelEditBtn {
    cursor: pointer;
    width: 50%;
    text-align: center;
  }
  .acceptEditBtn {
    color: $success-color;
    &:hover {
      color: $success-color / 2;
    }
  }
  .cancelEditBtn {
    color: $danger-color;
    &:hover {
      color: $danger-color / 2;
    }
  }
}
</style>
