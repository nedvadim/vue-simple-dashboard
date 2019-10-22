<template>
  <div v-if="this.showToaster" class="container">
    <div class="toastr">
      <p class="header">{{this.header}}</p>
      <p class="content">Lorem ipsum dolor sit.</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      header: "-",
      showToaster: false
    };
  },
  methods: {
    setHeader(valueHeader) {
      this.header = valueHeader;
    },
    show() {
      this.showToaster = true;
    }
  },
  mounted() {
    console.log("mounted!");
  },
  created() {
    console.log("created!");
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 150px;
  height: auto;
  position: absolute;
  top: 10%;
  right: 5%;
  .toastr {
    width: inherit;
    height: inherit;
    background-color: $primary-color;
    .header,
    .content {
      text-align: center;
      color: white;
    }
    .header {
      font-weight: 700;
    }
  }
}
</style>