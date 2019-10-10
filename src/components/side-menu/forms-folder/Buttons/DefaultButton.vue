<template>
  <div class="button-container">
    <button class="button" :class="[type.toLowerCase()]" :disabled="this.isDisabled">{{type}}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDisabled: false
    };
  },
  props: ["type"],
  created: function() {
    if (this.type.toLowerCase() === "disabled") {
      this.isDisabled = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.button-container {
  .button {
    min-width: 130px;
    height: 40px;
    cursor: pointer;
    border: none;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;
    background-color: $primary-color;
    color: #fff;
    transition: all 0.3s;
    &:focus {
      outline: none;
      box-shadow: 0px 0px 0px 5px #d3d3d3;
    }
  }
  .success {
    background-color: $success-color;
  }
  .warning {
    background-color: $warning-color;
  }
  .danger {
    background-color: $error-color;
  }
  .info {
    background-color: $info-color;
  }
  .disabled {
    background-color: #e4e7ed;
    color: #bbc3d4;
    cursor: auto;
  }
}
</style>