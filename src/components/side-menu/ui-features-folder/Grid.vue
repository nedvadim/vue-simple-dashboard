<template>
  <div>
    <div class="grid-page-wrapper">
      <h1 class="header">Grid System</h1>

      <div class="my-container">
        <div class="my-row">
          <div class="box c-lg-2 c-md-4">[c-lg-2]</div>
          <div class="box c-lg-10 c-md-8">[c-lg-10]</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.grid-page-wrapper {
  width: 90%;
  margin: 0 auto;
  background-color: #f5f5f5;
  box-shadow: 0px 0px 4px -1px black;
  .header {
    border-bottom: 1px solid #b8b8b8;
  }
  .box {
    background-color: #d4d4d4;
  }
}
</style>