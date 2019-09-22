<template>
  <div class="list-container">
    <div class="list-header">
      <p>Countries</p>
    </div>
    <div class="list">
      <ul>
        <li>Japan</li>
        <li>Hungary</li>
        <li>USA</li>
        <li>Israel</li>
        <li>India</li>
        <li>Slovakia</li>
        <li>France</li>
        <li>Canada</li>
        <li>Iran</li>
        <li>Bulgaria</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$borderColor: #a0a0a0;

.list-container {
  background-color: #f5f5f5;
  padding: 15px;
  height: fit-content;
  .list-header {
    p {
      font-size: 25px;
      border-bottom: 1px solid $borderColor;
    }
  }
  ul {
    li {
      list-style: none;
      padding: 5px 0;
      border-bottom: 1px solid #d8d8d8;
    }
  }
}
</style>