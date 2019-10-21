<template>
  <div>
    <div ref="basePopoverContent" class="base-popover">
      <slot></slot>
    </div>

    <div ref="basePopoverOverlay" class="base-popover__overlay" @click.stop="destroyPopover"></div>
  </div>
</template>
<script>
import Popper from "popper.js";
import Vue from "vue";
export default {
  name: "BasePopover",
  props: {
    popoverOptions: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      popperInstance: null
    };
  },
  methods: {
    initPopper() {
      const modifiers = {};
      const { popoverReference, offset, placement } = this.popoverOptions;

      if (offset) {
        modifiers.offset = {
          offset
        };
      }

      if (placement) {
        modifiers.placement = placement;
      }

      this.popperInstance = new Popper(
        popoverReference,
        this.$refs.basePopoverContent,
        {
          placement,
          modifiers: {
            ...modifiers,
            preventOverflow: {
              boundariesElement: "viewport"
            }
          }
        }
      );
    },
    updateOverlayPosition() {
      const overlayElement = this.$refs.basePopoverOverlay;
      const overlayPosition = overlayElement.getBoundingClientRect();

      overlayElement.style.transform = `translate(-${overlayPosition.x}px, -${overlayPosition.y}px)`;
    },
    destroyPopover() {
      if (this.popperInstance) {
        this.popperInstance.destroy();
        this.popperInstance = null;
        this.$emit("closePopover");
      }
    }
  },
  mounted() {
    this.initPopper();
    this.updateOverlayPosition();
  }
};
</script>
<style lang="scss" scoped>
.base-popover {
  position: relative;
  z-index: 50;

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 40;
    width: 100%;
    height: 100vh;
  }
}
.wrapper {
  border: 1px solid green;
}
</style>