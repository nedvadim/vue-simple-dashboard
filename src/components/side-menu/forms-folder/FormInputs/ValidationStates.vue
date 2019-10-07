<template>
  <div class="validation-states-container">
    <div class="validation-states-header">
      <p>Validation States</p>
    </div>
    <div class="inputs">
      <input type="text" class="app-input input-info" placeholder="Input with Info" />
      <input type="text" class="app-input input-success" placeholder="Success Input" />
      <input type="text" class="app-input input-warning" placeholder="Warning Input" />
      <input type="text" class="app-input input-danger" placeholder="Danger Input" />
      <input type="text" class="app-input input-primary" placeholder="Primary Input" />
    </div>
    <div class="checkboxes">
      <label class="checkbox-item success-check">
        <input type="checkbox" />
        <span class="marked"></span>
        Success
      </label>

      <label class="checkbox-item warning-check">
        <input type="checkbox" />
        <span class="marked"></span>
        Warning
      </label>

      <label class="checkbox-item danger-check">
        <input type="checkbox" />
        <span class="marked"></span>
        Danger
      </label>
      <input type="checkbox" /> not custom
    </div>
  </div>
</template>
<style lang="scss" scoped>
.validation-states-container {
  background-color: $component-bg-color;
  padding: 15px;
  height: fit-content;
  width: $component-width;
  margin: $margin-container;
  .validation-states-header {
    p {
      font-size: 25px;
      border-bottom: 1px solid $components-header-border-color;
    }
  }
}

.app-input {
  //display: block;
  margin-top: 20px;
  width: 100%;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid #cecece;
  transition: all 0.2s;
  &::placeholder {
    color: #c8c8c8;
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 5px #e6e6e6;
  }
}

.input-info {
  border: 1px solid #2eceff;
  &:hover {
    border: 1px solid #1f2eff;
  }
}
.input-success {
  border: 1px solid #08ee00;
  &:hover {
    border: 1px solid #059400;
  }
}
.input-warning {
  border: 1px solid #ffd036;
  &:hover {
    border: 1px solid #db9601;
  }
}
.input-danger {
  border: 1px solid #ff0000;
  &:hover {
    border: 1px solid #a30000;
  }
}
.input-primary {
  border: 1px solid #0086af;
  &:hover {
    border: 1px solid #005670;
  }
}

//checkboxes general styling -------------------------------
.checkboxes {
  margin-top: 15px;
}
.checkbox-item {
  //display: block;
  position: relative;
  margin-bottom: 2px;
  margin-right: 30px;
  padding-left: 25px;
  user-select: none;
  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
    cursor: pointer;
    &:checked {
      ~ {
        .marked {
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
    top: 5px;
    left: 0;
    border-radius: 5px;
    width: 16px;
    height: 16px;
    background-color: #e6e6e6;

    &:hover {
      opacity: 0.7;
      border: 1px solid #2e76fb;
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
//------------------------------------------

.success-check {
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
.warning-check {
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
.danger-check {
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