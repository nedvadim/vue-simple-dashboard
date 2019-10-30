<template>
  <div class="my-container">
    <div class="my-row margin-top">
      <div class="c-4 content">
        <app-spinner v-if="showSpinner1"></app-spinner>
        <p>Here is Absolutly Default Spinner</p>
        <app-btn class="margin-top" @click.native="showSpin1()">Press to see Spinner</app-btn>
      </div>
      <div class="c-4 content">
        <app-spinner :size="'small'" :color="'success'" v-if="showSpinner2"></app-spinner>
        <p>Here is Success Small Spinner</p>
        <app-btn class="margin-top" @click.native="showSpin2()">Press to see Spinner</app-btn>
      </div>
      <div class="c-4 content">
        <app-spinner size="big" color="danger" v-if="showSpinner3"></app-spinner>
        <p>Here is Big Danger Spinner</p>
        <app-btn class="margin-top" @click.native="showSpin3()">Press to see Spinner</app-btn>
      </div>
      <div class="c-6 content">
        <app-spinner color="warning" v-if="showSpinner4"></app-spinner>
        <p>Here is Warning Spinner</p>
        <app-btn class="margin-top" @click.native="showSpin4()">Press to see Spinner</app-btn>
      </div>
      <div class="c-6 content">
        <app-spinner color="info" v-if="showSpinner5"></app-spinner>
        <p>Here is Info Spinner</p>
        <app-btn class="margin-top" @click.native="showSpin5()">Press to see Spinner</app-btn>
      </div>
      <div class="c-6 content my-form">
        <app-spinner v-if="showSpinner6"></app-spinner>
        <p>Some content</p>
        <div class="my-row my-form-controls">
          <app-inp class="c-6" inputPlaceholder="Nickname"></app-inp>
          <app-inp class="c-6" inputType="password" inputPlaceholder="Password"></app-inp>
          <app-btn class="margin-top c-3" @click.native="showSpin6()">Press to see Spinner</app-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SpinnerItem from "./SpinnerItem";
import Btn from "../../forms-folder/Buttons/ButtonItem";
import Inp from "../../forms-folder/FormInputs/TextInputItem";
export default {
  components: { appSpinner: SpinnerItem, appBtn: Btn, appInp: Inp },
  data() {
    return {
      showSpinner1: false,
      showSpinner2: false,
      showSpinner3: false,
      showSpinner4: false,
      showSpinner5: false,
      showSpinner6: false
    };
  },
  methods: {
    showSpin1() {
      var self = this;
      this.showSpinner1 = true;
      setTimeout(() => {
        self.showSpinner1 = false;
      }, 3000);
    },
    showSpin2() {
      var self = this;
      this.showSpinner2 = true;
      setTimeout(() => {
        self.showSpinner2 = false;
      }, 3000);
    },
    showSpin3() {
      var self = this;
      this.showSpinner3 = true;
      setTimeout(() => {
        self.showSpinner3 = false;
      }, 3000);
    },
    showSpin4() {
      var self = this;
      this.showSpinner4 = true;
      setTimeout(() => {
        self.showSpinner4 = false;
      }, 3000);
    },
    showSpin5() {
      var self = this;
      this.showSpinner5 = true;
      setTimeout(() => {
        self.showSpinner5 = false;
      }, 3000);
    },
    showSpin6() {
      var self = this;
      this.showSpinner6 = true;
      setTimeout(() => {
        self.showSpinner6 = false;
      }, 3000);
    }
  }
}; 
</script>
<style lang="scss" scoped>
.content {
  position: relative;
  height: auto;
  padding: 10px;
  background-color: #fff;
  p {
    border-bottom: 1px solid #dadada;
  }
}
.margin-top {
  margin-top: 10px;
}
.my-form {
  padding: 15px;
  .my-form-controls {
    margin-top: 20px;
  }
}
</style>