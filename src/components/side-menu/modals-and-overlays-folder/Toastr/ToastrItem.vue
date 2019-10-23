<template >
  <div v-if="show" class="container">
    <div class="toastr" :class="[color]">
      <p class="header">{{tHeader}}</p>
      <p class="content">{{tContent}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    header: {
      type: String
    },
    content: {
      type: String
    },
    color: {
      type: String,
      default: "primary"
    }
  },
  data() {
    return {
      self: this,
      tHeader: this.header,
      tContent: this.content,
      show: true
    };
  },
  mounted() {
    var self = this;
    setTimeout(function() {
      //self.$emit("destroy-toastr");
      //self.$destroy();
      self.show = false;
    }, 4000);
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 150px;
  height: auto;
  margin: 5px auto;
  //   position: absolute;
  //   top: 10%;
  //   right: 5%;
  .toastr {
    width: inherit;
    height: inherit;

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

.warning {
  background-color: $warning-color;
}

.danger {
  background-color: $danger-color;
}

.success {
  background-color: $success-color;
}

.primary {
  background-color: $primary-color;
}

.info {
  background-color: $info-color;
}
</style>