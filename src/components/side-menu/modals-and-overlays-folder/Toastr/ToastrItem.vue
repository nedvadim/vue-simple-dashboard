<template >
  <div v-if="show" class="container" @click="closeToastr()">
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
      type: String,
      default: "Default Header"
    },
    content: {
      type: String,
      default: "Default Content"
    },
    duration: {
      type: Number,
      default: 2000
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
      tDuration: parseInt(this.duration),
      show: true
    };
  },
  methods: {
    setValidHeader() {
      var doesHeaderContainsOnlySpaces = !this.tHeader.replace(/\s/g, "")
        .length;
      if (doesHeaderContainsOnlySpaces) {
        this.tHeader = "Default header";
      }
    },
    setValidContent() {
      var doesContentContainsOnlySpaces = !this.tContent.replace(/\s/g, "")
        .length;
      if (doesContentContainsOnlySpaces) {
        this.tContent = "Default content";
      }
    },
    setValidDuration() {
      //this.tDuration = parseInt(this.tDuration);
    },
    closeToastr() {
      this.show = false;
    }
  },
  mounted() {
    var self = this;
    self.setValidHeader();
    self.setValidContent();
    self.setValidDuration();
    setTimeout(function() {
      //self.$emit("destroy-toastr");
      //self.$destroy();
      self.show = false;
    }, self.tDuration);
  }
};
</script>
<style lang="scss" scoped>
.container {
  position: static;
  transition: all 0.6s;
  width: 170px;
  height: auto;
  margin: 5px auto;

  .toastr {
    position: static;
    width: inherit;
    height: inherit;
    cursor: pointer;
    border-radius: 5px;
    padding: 8px;
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
  &:hover {
    background-color: $warning-color * 1.15;
  }
}

.danger {
  background-color: $danger-color;
  &:hover {
    background-color: $danger-color * 1.15;
  }
}

.success {
  background-color: $success-color;
  &:hover {
    background-color: $success-color * 1.15;
  }
}

.primary {
  background-color: $primary-color;
  &:hover {
    background-color: $primary-color * 1.15;
  }
}

.info {
  background-color: $info-color;
  &:hover {
    background-color: $info-color * 1.15;
  }
}

.absolute {
  // border: 1px solid black;
  // position: absolute;
  // top: 10%;
  // right: 1%;
  // width: 160px;
  // height: 85vh;
}
</style>