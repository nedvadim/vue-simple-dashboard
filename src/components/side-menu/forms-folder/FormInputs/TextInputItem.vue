<template>
  <div>
    <input
      v-if="inputType !== 'textarea'"
      :type="inputType"
      class="app-input"
      :class="[shape, size]"
      :placeholder="inputPlaceholder"
      :disabled="disabled"
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
      type: String
    },
    size: {
      type: String
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
</style>