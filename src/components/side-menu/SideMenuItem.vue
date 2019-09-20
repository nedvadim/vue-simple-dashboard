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
          <div v-for="headers in content.pages">
            <router-link :to="headers.linkToComponent" tag="li">
              <a>{{headers.componentName}}</a>
            </router-link>
          </div>
          <!-- <router-link to="/portfolio" activeClass="active" tag="li"><a>{{headers.componentName}}</a></router-link>
          <li v-for="headers in content.pages">{{headers.componentName}}</li>-->
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

<style lang="scss" scoped>
button {
  width: 100%;
  border: none;
  background-color: #e6e6e6;
  height: 50px;
  cursor: pointer;
  border-bottom: 1px solid #c7c7c7;
  outline-color: #4b4b4b;
}
li {
  border-bottom: 1px solid #a8a8a8;
  text-align: center;
  font-size: 16px;
  a {
    text-decoration: none;
  }
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