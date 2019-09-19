<template>
  <div class="header">
    <h1>
      <span>V</span>ue
      <span>D</span>ashboard
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 10
    };
  }
};
</script>
<style lang="scss" scoped>
.header {
  top: 0;
  width: 100%;
  height: 7vh;
  box-shadow: 0px -2px 8px 0px #000000;
  display: flex;
  align-items: center;
  background-color: azure;
  z-index: 20;
  h1 {
    color: #5f5f5f;
    margin-left: 25px;
    span {
      color: black;
    }
  }
}
</style>