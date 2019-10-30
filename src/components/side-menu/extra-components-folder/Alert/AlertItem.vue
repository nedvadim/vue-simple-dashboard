<template>
  <div class="alert" :class="[variant, color]">
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    variant: {
      type: String
    },
    color: {
      type: String,
      default: "primary"
    }
  }
};
</script>
<style lang="scss" scoped>
.alert {
  display: flex;
  align-content: center;
  width: 100%;
  height: 60px;
  line-height: 60px;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  padding-left: 20px;
  border-radius: 4px;
  user-select: none;
}
.primary {
  border: 1px solid $primary-color;
  background-color: $primary-color;
}
.info {
  border: 1px solid $info-color;
  background-color: $info-color;
}
.success {
  border: 1px solid $success-color;
  background-color: $success-color;
}
.warning {
  border: 1px solid $warning-color;
  background-color: $warning-color;
}
.danger {
  border: 1px solid $danger-color;
  background-color: $danger-color;
}
.outline {
  background-color: rgba(240, 248, 255, 0.1);
  color: #494949;
}
</style>