<template>
  <div>
    <bg :header="'Popovers'">
      <div>
        <div class="displayBlock mainButtonsMargin" ref="popoverReference1" @click="openPopover1">
          <app-btn :type="'info'">top</app-btn>
        </div>
        <div class="displayBlock mainButtonsMargin" ref="popoverReference2" @click="openPopover2">
          <app-btn :type="'success'">right with form</app-btn>
        </div>
        <div class="displayBlock mainButtonsMargin" ref="popoverReference3" @click="openPopover3">
          <app-btn :type="'warning'">bottom with tabs</app-btn>
        </div>
      </div>
    </bg>
    <!-- FIRST POPOVER-->
    <BasePopover
      v-if="isPopoverVisible1"
      :popover-options="popoverOptions1"
      @closePopover="closePopover1"
    >
      <BasePopoverContent>
        <div class="padding15">
          <p>I am top popper</p>
        </div>
      </BasePopoverContent>
    </BasePopover>
    <!-------------------->

    <!-- SECOND POPOVER-->
    <BasePopover
      v-if="isPopoverVisible2"
      :popover-options="popoverOptions2"
      @closePopover="closePopover2"
    >
      <BasePopoverContent>
        <div class="padding15">
          <p>SAY MY NAME:</p>
          <app-inp class="input" :inputPlaceholder="'Name'"></app-inp>
          <app-btn class="btn" :type="'warning'" @click.native="said = !said">say</app-btn>
          <p v-if="said">you are goddamn right</p>
        </div>
      </BasePopoverContent>
    </BasePopover>
    <!-------------------->
    <!-- THIRD POPOVER-->
    <BasePopover
      v-if="isPopoverVisible3"
      :popover-options="popoverOptions3"
      @closePopover="closePopover3"
    >
      <BasePopoverContent>
        <div class="padding15">
          <app-tab class="tabs" :tabData="tabData"></app-tab>
        </div>
      </BasePopoverContent>
    </BasePopover>
    <!-------------------->
  </div>
</template>
<script>
import WhiteBack from "../../WhiteBack";
import BasePopover from "./BasePopover";
import BasePopoverContent from "./BasePopoverContent";
import Btn from "../../forms-folder/Buttons/ButtonItem";
import Inp from "../../forms-folder/FormInputs/TextInputItem";
import Tab from "../../layouts-folder/Tabs/tab1";
export default {
  data() {
    return {
      isPopoverVisible1: false,
      popoverOptions1: {
        popoverReference: null,
        placement: "top",
        offset: "0,0"
      },
      //====================================
      isPopoverVisible2: false,
      popoverOptions2: {
        popoverReference: null,
        placement: "right",
        offset: "0,0"
      },
      //====================================
      isPopoverVisible3: false,
      popoverOptions3: {
        popoverReference: null,
        placement: "bottom",
        offset: "0,0"
      },
      tabData: [
        { id: 1, tabName: "tab #1", tabContent: "Interesting content" },
        { id: 2, tabName: "tab #2", tabContent: "Amazing!" },
        { id: 3, tabName: "tab #3", tabContent: "How it's even possible!?" }
      ],
      said: false
    };
  },
  components: {
    appBtn: Btn,
    BasePopover,
    BasePopoverContent,
    bg: WhiteBack,
    appInp: Inp,
    appTab: Tab
  },
  mounted() {
    this.popoverOptions1.popoverReference = this.$refs.popoverReference1;

    this.popoverOptions2.popoverReference = this.$refs.popoverReference2;

    this.popoverOptions3.popoverReference = this.$refs.popoverReference3;
  },
  methods: {
    closePopover1() {
      this.isPopoverVisible1 = false;
    },
    openPopover1() {
      this.isPopoverVisible1 = true;
    },
    //==============================
    closePopover2() {
      this.isPopoverVisible2 = false;
    },
    openPopover2() {
      this.isPopoverVisible2 = true;
    },
    //==============================
    closePopover3() {
      this.isPopoverVisible3 = false;
    },
    openPopover3() {
      this.isPopoverVisible3 = true;
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
.input {
  width: 100%;
  margin-top: 10px;
}
.btn {
  margin-top: 10px;
}
.mainButtonsMargin {
  margin: 10px 10px 0px 10px;
}
.tabs {
  min-width: 300px;
}
</style>