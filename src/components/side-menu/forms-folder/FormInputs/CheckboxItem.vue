<template>
  <div>
    <label class="checkbox-item" :class="[status, {disabledCheckbox: disabled}]">
      {{data.name}}
      <input
        type="checkbox"
        name="data.name"
        value="data.value"
        :checked="data.checked"
        :disabled="disabled"
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
  props: ["data", "status", "disabled"],
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
          background-color: $primary-color;
          border: 1px solid $primary-color;
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
    border-radius: 5px;
    border: 1px solid $primary-color;
    &:hover {
      opacity: 0.7;
      border: 1px solid $primary-color * 1.5;
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
          background-color: $success-color;
          border: 1px solid $success-color;
          &:after {
            display: block;
          }
        }
      }
    }
  }
  .marked {
    border: 1px solid $success-color;
    &:hover {
      border: 1px solid $success-color;
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
          background-color: $warning-color;
          border: 1px solid $warning-color;
          &:after {
            display: block;
          }
        }
      }
    }
  }
  .marked {
    border: 1px solid $warning-color;
    &:hover {
      border: 1px solid $warning-color;
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
          background-color: $danger-color;
          border: 1px solid $danger-color;
          &:after {
            display: block;
          }
        }
      }
    }
  }
  .marked {
    border: 1px solid $danger-color;
    &:hover {
      border: 1px solid $danger-color;
    }
    &:after {
      border-bottom: 2px solid #ffffff;
      border-left: 2px solid #ffffff;
    }
  }
}
.disabledCheckbox {
  input[type="checkbox"] {
    &:checked {
      ~ {
        .marked {
          background-color: #c3c3c3;
          border: 1px solid #c3c3c3;
          &:after {
            display: block;
          }
        }
      }
    }
  }
  .marked {
    border: 1px solid #c3c3c3;
    &:hover {
      border: 1px solid #c3c3c3;
    }
    &:after {
      border-bottom: 2px solid #ffffff;
      border-left: 2px solid #ffffff;
    }
  }
}
</style>