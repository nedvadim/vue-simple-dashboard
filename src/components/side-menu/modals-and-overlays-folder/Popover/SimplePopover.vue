<template>
  <div>
    <bg :header="'Simple Popovers'">
      <div>
        <div class="displayBlock" ref="popoverReference" @click="openPopover">
          <app-btn>top</app-btn>
        </div>
      </div>
    </bg>

    <BasePopover
      v-if="isPopoverVisible"
      :popover-options="popoverOptions"
      @closePopover="closePopover"
    >
      <BasePopoverContent>
        <div class="padding15">
          <p>I am popper</p>
          <app-btn>i do nothing</app-btn>
        </div>
      </BasePopoverContent>
    </BasePopover>
    <!-- <button class="margintop" ref="popoverReference" @click="openPopover">Yo</button>
    <base-popover
      v-if="isPopoverVisible"
      :popover-options="popoverOptions"
      @closePopover="closePopover"
    >
      <BasePopoverContent>
        <div class="padding5">
          <p>I am popper</p>
          <button>i do nothing</button>
        </div>
      </BasePopoverContent>
    </base-popover>-->
  </div>
</template>
<script>
import WhiteBack from "../../WhiteBack";
import BasePopover from "./BasePopover";
import BasePopoverContent from "./BasePopoverContent";
import Btn from "../../forms-folder/Buttons/ButtonItem";
export default {
  data() {
    return {
      isPopoverVisible: false,
      popoverOptions: {
        popoverReference: null,
        placement: "top",
        offset: "0,0"
      }
    };
  },
  components: {
    appBtn: Btn,
    BasePopover,
    BasePopoverContent,
    bg: WhiteBack
  },
  mounted() {
    this.popoverOptions.popoverReference = this.$refs.popoverReference;
    console.log(this.$refs.popoverReference);
  },
  methods: {
    closePopover() {
      this.isPopoverVisible = false;
      console.log(this.isPopoverVisible);
    },
    openPopover() {
      this.isPopoverVisible = true;
      console.log(this.isPopoverVisible);
    }
  }
};
</script>
<style lang="scss" scoped>
.displayBlock {
  display: inline-block;
}
.padding15 {
  padding: 15px;
}
</style>