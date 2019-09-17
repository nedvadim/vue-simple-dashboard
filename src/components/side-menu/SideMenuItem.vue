<template>
  <div class="container-elements">
    <button
      type="button"
      class="collapse-button"
      v-on:click="show = !show"
    >{{content.elementsHeader}}</button>
    <div class="collapse-container">
      <transition name="slide" mode="out-in">
        <ul v-if="show">
          <li v-for="headers in content.pages">{{headers.componentName}}</li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      show: false
    };
  },
  props: ["content"]
};
</script>

<style>
button {
  width: 100%;
  border: none;
  background-color: #f7f7f7;
  height: 50px;
  cursor: pointer;
  border-bottom: 1px solid #d8d8d8;
}
li {
  border-bottom: 1px solid #a8a8a8;
  text-align: center;
  font-size: 16px;
}
.slide-enter-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-enter, .slide-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  /*max-height: 0;*/
  opacity: 0;
}
</style>