<template>
  <button
    class="button"
    :class="[type.toLowerCase(), {outline:outline}, {ghost:ghost}, shape, size]"
    :disabled="this.isDisabled"
  >{{btnText}}</button>
</template>

<script>
export default {
  data() {
    return {
      isDisabled: false
    };
  },
  props: {
    type: {
      type: String,
      default: "primary"
    },
    outline: {
      type: Boolean
    },
    btnText: {
      type: String
    },
    ghost: {
      type: Boolean
    },
    shape: {
      type: String
    },
    size: {
      type: String
    }
  },
  created: function() {
    if (this.type.toLowerCase() === "disabled") {
      this.isDisabled = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  //min-width: 130px;
  padding: 0 8px;
  height: 40px;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  color: #fff;
  transition: all 0.3s;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 5px #d3d3d3;
  }
}
.success {
  background-color: $success-color;
  border: 1px solid $success-color;
}

.primary {
  background-color: $primary-color;
  border: 1px solid $primary-color;
}
.warning {
  background-color: $warning-color;
  border: 1px solid $warning-color;
}
.danger {
  background-color: $danger-color;
  border: 1px solid $danger-color;
}
.info {
  background-color: $info-color;
  border: 1px solid $info-color;
}
.disabled {
  background-color: #e4e7ed;
  border: none;
  color: #bbc3d4;
  cursor: auto;
}

.outline.primary {
  background-color: rgba(51, 102, 255, 0);
  color: $primary-color;
  &:hover {
    background-color: rgba(51, 102, 255, 0.1);
  }
  &:focus {
    background-color: rgba(51, 102, 255, 0.1);
  }
}
.outline.danger {
  background-color: rgba(255, 61, 113, 0);
  color: $danger-color;
  &:hover {
    background-color: rgba(255, 61, 113, 0.1);
  }
  &:focus {
    background-color: rgba(255, 61, 113, 0.1);
  }
}
.outline.warning {
  background-color: rgba(255, 170, 0, 0);
  color: $warning-color;
  &:hover {
    background-color: rgba(255, 170, 0, 0.1);
  }
  &:focus {
    background-color: rgba(255, 170, 0, 0.1);
  }
}
.outline.success {
  background-color: rgba(0, 214, 143, 0);
  color: $success-color;
  &:hover {
    background-color: rgba(0, 214, 143, 0.1);
  }
  &:focus {
    background-color: rgba(0, 214, 143, 0.1);
  }
}
.outline.info {
  background-color: rgba(66, 170, 255, 0);
  color: $info-color;
  &:hover {
    background-color: rgba(66, 170, 255, 0.1);
  }
  &:focus {
    background-color: rgba(66, 170, 255, 0.1);
  }
}
.default.outline {
  background-color: rgba(51, 102, 255, 0);
  color: $primary-color;
  &:hover {
    background-color: rgba(51, 102, 255, 0.1);
  }
  &:focus {
    background-color: rgba(51, 102, 255, 0.1);
  }
}

.ghost.primary {
  background-color: rgba(66, 170, 255, 0);
  border: none;
  color: $primary-color;
  &:hover {
    background-color: rgba(160, 160, 160, 0.1);
  }
  &:focus {
    background-color: rgba(160, 160, 160, 0.2);
  }
}
.ghost.success {
  background-color: rgba(66, 170, 255, 0);
  border: none;
  color: $success-color;
  &:hover {
    background-color: rgba(160, 160, 160, 0.1);
  }
  &:focus {
    background-color: rgba(160, 160, 160, 0.2);
  }
}
.ghost.warning {
  background-color: rgba(66, 170, 255, 0);
  border: none;
  color: $warning-color;
  &:hover {
    background-color: rgba(160, 160, 160, 0.1);
  }
  &:focus {
    background-color: rgba(160, 160, 160, 0.2);
  }
}
.ghost.danger {
  background-color: rgba(66, 170, 255, 0);
  border: none;
  color: $danger-color;
  &:hover {
    background-color: rgba(160, 160, 160, 0.1);
  }
  &:focus {
    background-color: rgba(160, 160, 160, 0.2);
  }
}
.ghost.info {
  background-color: rgba(66, 170, 255, 0);
  border: none;
  color: $info-color;
  &:hover {
    background-color: rgba(160, 160, 160, 0.1);
  }
  &:focus {
    background-color: rgba(160, 160, 160, 0.2);
  }
}
.rectangle {
  border-radius: 4px;
}
.semi-round {
  border-radius: 14px;
}
.round {
  border-radius: 25px;
}
.tiny {
  //min-width: 60px;
  height: 22px;
  font-size: 11px;
}
.small {
  //min-width: 100px;
  height: 35px;
  font-size: 14px;
}
.medium {
}
.large {
  //min-width: 145px;
  height: 50px;
  font-size: 20px;
  font-weight: 900;
}
.giant {
  // min-width: 150px;
  height: 60px;
  font-size: 22px;
  font-weight: 900;
}
</style>