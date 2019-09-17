<template>
  <div class="container-elements">
    <button type="button" class="collapse-button">{{content.elementsHeader}}</button>
    <div class="collapse-container">
      <ul>
        <li v-for="headers in content.pages">{{headers.componentName}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  props: ["content"]
};
</script>

<style>
</style>