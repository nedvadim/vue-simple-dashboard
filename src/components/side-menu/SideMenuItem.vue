<template>
  <div class="container-elements">
    <div type="button" class="collapse-button" v-on:click="show = !show">{{content.elementsHeader}}</div>
    <div class="collapse-container">
      <transition name="slide" mode="out-in">
        <ul v-if="show">
          <div v-for="pages in content.pages" v-bind:key="pages.id" @click="closeMenu">
            <router-link :to="pages.linkToComponent" tag="li">
              <a>{{pages.componentName}}</a>
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
  props: ["content"],
  methods: {
    closeMenu(event) {
      this.$emit("closeMenu");
    }
  }
};
</script>

<style lang="scss" scoped>
.collapse-button {
  width: 100%;
  padding: 18px 0 18px 20px;
  border: none;
  background-color: #ffffff;
  font-size: 17px;
  font-weight: 500;
  height: 55px;
  cursor: pointer;
  border-bottom: 1px solid #ececec;
  outline-color: $info-color * 2;
}
li {
  border-bottom: 1px solid #ececec;

  a {
    text-decoration: none;
    color: #2f2f2f;
    font-size: 14px;
    height: 55px;
    display: block;
    padding: 19px 0 19px 25px;
    transition: 0.2s;
    &:hover {
      transform: translateX(-3px);
    }
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