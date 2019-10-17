<template>
  <div>
    <input
      v-if="inputType !== 'textarea'"
      :type="inputType"
      class="app-input"
      :class="[shape, size, status]"
      :placeholder="inputPlaceholder"
      :disabled="disabled"
      :id="inputId"
      ref="customInput"
      @input="updateValue()"
      @keydown.enter="clearInput"
    />
    <textarea
      v-else
      class="app-input app-textarea"
      :placeholder="inputPlaceholder"
      :class="[shape, size]"
      :disabled="disabled"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    shape: {
      type: String // 'rectangle', 'semi-round' or 'round'
    },
    size: {
      type: String // 'small' or 'large' medium is default value
    },
    status: {
      type: String // 'primary', 'success', 'warning', 'danger', 'info'
    },
    inputPlaceholder: {
      type: String
    },
    inputType: {
      type: String,
      default: "text"
    },
    disabled: {
      type: Boolean
    },
    inputId: {
      type: String
    }
  },
  methods: {
    updateValue(event) {
      this.$emit("input", this.$refs.customInput.value);
    },
    clearInput() {
      this.$refs.customInput.value = "";
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.app-input {
  //display: block;
  //margin-top: 20px;
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
.app-textarea {
  box-sizing: border-box;
  min-height: 150px;
  min-width: 100%;
  resize: none;
}

.rect {
  border-radius: 0;
}
.semi-round {
  border-radius: 14px;
}
.round {
  border-radius: 30px;
}

input[type="text"]:disabled {
  background-color: #e2e2e2;
}

.small {
  padding: 2px 12px;
}
.large {
  padding: 12px;
}

.info {
  border: 1px solid #2eceff;
  &:hover {
    border: 1px solid #1f2eff;
  }
}
.success {
  border: 1px solid #08ee00;
  &:hover {
    border: 1px solid #059400;
  }
}
.warning {
  border: 1px solid #ffd036;
  &:hover {
    border: 1px solid #db9601;
  }
}
.danger {
  border: 1px solid #ff0000;
  &:hover {
    border: 1px solid #a30000;
  }
}
.primary {
  border: 1px solid #0086af;
  &:hover {
    border: 1px solid #005670;
  }
}
</style>