<template>
  <div class="header">
    <div class="hamburger" @click="toggleHamburger">
      <font-awesome-icon class="hamburger-icon" icon="bars"></font-awesome-icon>
    </div>
    <router-link to="/" tag="h1" class="logo">
      <span>V</span>ue
      <span>D</span>ashboard
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    hamburgerOn: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      a: 10
    };
  },
  methods: {
    toggleHamburger(event) {
      this.$emit("toggleham");
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 7vh;
  box-shadow: 0px -2px 8px 0px #000000;
  display: flex;
  align-items: center;
  background-color: #000000;
  z-index: 20;
  h1 {
    color: #fff;
    margin-left: 25px;
    cursor: pointer;
    span {
      color: #f7f7f7;
    }
  }
  .hamburger {
    margin-left: 15px;
    width: 30px;
    height: 32px;
    border: 1px solid white;
    border-radius: 3px;
    display: block;
    cursor: pointer;
    .hamburger-icon {
      color: white;
      margin: 5px;
      &:hover {
        color: #e0e0e0;
      }
    }
  }

  @media only screen and (min-width: 960px) {
    .hamburger {
      display: none;
    }
  }
}
</style>