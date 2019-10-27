<template>
  <div>
    <label class="checkbox-item" :class="[status]">
      {{data.name}}
      <input
        type="checkbox"
        name="data.name"
        value="data.value"
        :checked="data.checked"
        @click="change()"
      />
      <span class="marked"></span>
    </label>
  </div>
</template>

<script>
export default {
  //--------------------------------------------
  // "status" props can receive 3 types of data
  //'success', 'warning', 'danger'
  //--------------------------------------------
  props: ["data", "status"],
  methods: {
    change: function() {
      this.checked = !this.checked;
      this.$emit("input", this.checked);
    }
  }
};
</script>

<style lang="scss" scoped>
.checkbox-item {
  display: block;
  position: relative;
  margin-bottom: 2px;
  padding-left: 25px;
  user-select: none;
  font-size: 17px;
  font-weight: 600;
  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
    cursor: pointer;
    &:checked {
      ~ {
        .marked {
          background-color: #1969ff;
          border: 1px solid #2e76fb;
          &:after {
            display: block;
          }
        }
      }
    }
  }
  .marked {
    cursor: pointer;
    position: absolute;
    top: 3px;
    left: 0;
    width: 16px;
    height: 16px;
    background-color: #d8d8d8;
    border-radius: 5px;

    &:hover {
      opacity: 0.7;
      border: 1px solid #1969ff;
    }
    &:after {
      content: "";
      position: absolute;
      display: none;
      top: 4px;
      left: 3px;
      width: 6px;
      height: 3px;
      border-bottom: 2px solid #ffffff;
      border-left: 2px solid #ffffff;
      transform: rotate(-48deg);
    }
  }
}

.success {
  input[type="checkbox"] {
    &:checked {
      ~ {
        .marked {
          background-color: #1f9512;
          border: 1px solid #1bb400;
          &:after {
            display: block;
          }
        }
      }
    }
  }
  .marked {
    border: 1px solid #008d00;
    &:hover {
      border: 1px solid #3ffb2e;
    }
    &:after {
      border-bottom: 2px solid #ffffff;
      border-left: 2px solid #ffffff;
    }
  }
}
.warning {
  input[type="checkbox"] {
    &:checked {
      ~ {
        .marked {
          background-color: #ffbc00;
          border: 1px solid #ce9e00;
          &:after {
            display: block;
          }
        }
      }
    }
  }
  .marked {
    border: 1px solid darkorange;
    &:hover {
      border: 1px solid #ffce2f;
    }
    &:after {
      border-bottom: 2px solid #ffffff;
      border-left: 2px solid #ffffff;
    }
  }
}
.danger {
  input[type="checkbox"] {
    &:checked {
      ~ {
        .marked {
          border-radius: 1px solid #ff0000;
          background-color: #ff0000;
          border: 1px solid #ff3c3c;
          &:after {
            display: block;
          }
        }
      }
    }
  }
  .marked {
    border: 1px solid red;
    &:hover {
      border: 1px solid #ff2626;
    }
    &:after {
      border-bottom: 2px solid #ffffff;
      border-left: 2px solid #ffffff;
    }
  }
}
</style>