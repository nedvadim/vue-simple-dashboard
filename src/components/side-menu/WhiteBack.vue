<template>
  <div class="template-container">
    <div class="template-header">
      <p>{{header}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["header"]
};
</script>
<style lang="scss" scoped>
.template-container {
  background-color: #f5f5f5;
  padding: 15px;
  height: fit-content;
  width: 95%;
  margin: 1.5em auto;
  .template-header {
    p {
      font-size: 25px;
      border-bottom: 1px solid rgb(211, 211, 211);
    }
  }
}
</style>