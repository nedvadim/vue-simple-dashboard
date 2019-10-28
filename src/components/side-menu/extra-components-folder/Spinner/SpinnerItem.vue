<template>
  <div>
    <div class="spinner">
      <div class="spinner-item rotating" :class="[size, color]" ref="spinnerRef"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "middle"
    },
    color: {
      type: String,
      default: "primary"
    }
  }
};
</script>
<style lang="scss" scoped>
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.rotating {
  -webkit-animation: rotating 1s linear infinite;
  -moz-animation: rotating 1s linear infinite;
  -ms-animation: rotating 1s linear infinite;
  -o-animation: rotating 1s linear infinite;
  animation: rotating 1s linear infinite;
}

.spinner {
  position: absolute;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(137, 110, 255, 0.2);
  text-align: center;
  z-index: 9999;
}
.spinner-item {
  align-self: center;
  border-radius: 50%;
  margin: 0 auto;
}
.small {
  width: 20px;
  height: 20px;
}
.middle {
  width: 40px;
  height: 40px;
}
.big {
  width: 60px;
  height: 60px;
}

.primary {
  border-top: 5px solid $primary-color;
  border-left: 5px solid $primary-color;
  border-bottom: 5px solid $primary-color;
  border-right: 5px solid rgba(0, 0, 255, 0);
}
.info {
  border-top: 5px solid $info-color;
  border-left: 5px solid $info-color;
  border-bottom: 5px solid $info-color;
  border-right: 5px solid rgba(0, 0, 255, 0);
}
.success {
  border-top: 5px solid $success-color;
  border-left: 5px solid $success-color;
  border-bottom: 5px solid $success-color;
  border-right: 5px solid rgba(0, 0, 255, 0);
}
.warning {
  border-top: 5px solid $warning-color;
  border-left: 5px solid $warning-color;
  border-bottom: 5px solid $warning-color;
  border-right: 5px solid rgba(0, 0, 255, 0);
}

.danger {
  border-top: 5px solid $danger-color;
  border-left: 5px solid $danger-color;
  border-bottom: 5px solid $danger-color;
  border-right: 5px solid rgba(0, 0, 255, 0);
}
</style>