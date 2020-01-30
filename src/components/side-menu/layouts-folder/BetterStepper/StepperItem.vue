<template>
  <div :class="[{verticalStepperWrapper: isVertical}, {stepperWrapper: !isVertical}]">
    <div class="steps" :class="{halfPageWidth : isVertical}">
      <div
        class="step"
        v-for="s in dataStepper.steps"
        :key="s"
        :class="{lastStepWidth : s === dataStepper.steps}"
      >
        <div class="circle" v-bind:class="{markedCircle: markedSteps[s-1]}">
          <div class="tick" v-if="markedSteps[s-1] === true"></div>
          <span v-else>{{s}}</span>
        </div>
        <div
          class="line"
          v-if="s!==dataStepper.steps"
          :class="[getLineSizeClass, {markedLine: markedSteps[s-1]}]"
        ></div>
      </div>
    </div>
    <div class="content" :class="{halfPageWidth : isVertical}">
      <div v-for="(c, index) in dataStepper.content" :key="index">
        <div
          v-if="getLastMarkedStepIndex === index && getLastMarkedStepIndex !== dataStepper.steps"
        >
          <h1 class="contentHeader">{{c.header}}</h1>
          <p class="contentText">{{c.text}}</p>
          <my-inp
            v-if="withInputs"
            :inputPlaceholder="'Step #' + (index+1)"
            :inputValue="inputsData[index]"
            v-model="inputsData[index]"
          ></my-inp>
        </div>
      </div>
      <div v-if="getLastMarkedStepIndex === dataStepper.steps">
        <h1 class="contentHeader">{{dataStepper.finalStep.header}}</h1>
        <p class="contentText">{{dataStepper.finalStep.text}}</p>
      </div>
      <div class="buttons">
        <my-btn
          :type="getLastMarkedStepIndex === 0 ? 'disabled' : 'primary'"
          @click.native="prevStep"
        >Prev</my-btn>
        <my-btn :type="isNextDisabled ? 'disabled' : 'primary'" @click.native="nextStep">Next</my-btn>
      </div>
    </div>
  </div>
</template>
<script>
import myBtn from "../../forms-folder/Buttons/ButtonItem";
import myInp from "../../forms-folder/FormInputs/TextInputItem";
import Vue from "vue";
export default {
  data() {
    return {
      lineClasses: ["lineLarge", "lineMiddle", "lineSmall"],
      markedSteps: [],
      inputsData: {}
    };
  },
  props: {
    dataStepper: {
      type: Object,
      default: () => ({
        steps: 4
      }),
      validator: function(value) {
        return value.steps > 2 && value.steps < 6;
      }
    },
    withInputs: {
      type: Boolean,
      default: false
    },
    isVertical: {
      type: Boolean,
      default: false
    }
  },
  components: {
    myBtn,
    myInp
  },
  computed: {
    isNextDisabled() {
      if (this.withInputs) {
        return this.inputsData[this.getLastMarkedStepIndex] === "" ||
          this.getLastMarkedStepIndex === this.dataStepper.steps
          ? true
          : false;
      } else {
        return this.getLastMarkedStepIndex === this.dataStepper.steps
          ? true
          : false;
      }
    },
    getLastMarkedStepIndex() {
      return this.markedSteps.lastIndexOf(true) === -1
        ? 0
        : this.markedSteps.lastIndexOf(true) + 1;
    },
    getLineSizeClass() {
      return this.lineClasses[this.dataStepper.steps - 3];
    }
  },
  methods: {
    nextStep() {
      for (let i = 0; i < this.dataStepper.content.length; i++) {
        if (this.markedSteps[i] === false) {
          Vue.set(this.markedSteps, i, true);
          return;
        }
      }
    },
    prevStep() {
      for (let i = this.dataStepper.content.length - 1; i >= 0; i--) {
        if (this.markedSteps[i] === true) {
          Vue.set(this.markedSteps, i, false);
          return;
        }
      }
    }
  },
  beforeMount: function() {
    for (var i = 0; i < this.dataStepper.content.length; i++) {
      Vue.set(this.markedSteps, i, false);
    }
    for (var i = 0; i < this.dataStepper.content.length; i++) {
      Vue.set(this.inputsData, i.toString(), "");
    }
  }
};
</script>
<style lang="scss" scoped>
.stepperWrapper {
  .steps {
    margin: 1.5rem 0;
    display: flex;
    .step {
      display: flex;
      width: 90%;
      margin: 0 auto;
      .circle {
        min-height: 30px;
        min-width: 30px;
        border-radius: 50%;
        color: #000000;
        text-align: center;
        line-height: 30px;
        background-color: #e2e2e2;
        .tick {
          height: 8px;
          position: relative;
          top: 8px;
          left: 6px;
          width: 16px;
          border-left: 2px solid #ffffff;
          border-bottom: 2px solid #ffffff;
          transform: rotate(-55deg);
        }
      }
      .markedCircle {
        background-color: #3366ff;
        color: #ffffff;
      }
      .line {
        height: 2px;
        background-color: #f1f1f1;
        align-self: center;
        margin: 0 5px;
      }
      .markedLine {
        background-color: #3366ff;
      }
      .lineSmall {
        width: 100%;
      }
      .lineMiddle {
        width: 100%;
      }
      .lineLarge {
        width: 100%; //39.1
      }
    }
    .lastStepWidth {
      width: 30px;
    }
  }

  .content {
    width: 40vw;
    text-align: center;
    margin: 0 auto;
    .contentHeader {
      font-size: 44px;
      margin-bottom: 20px;
    }
    .contentText {
      font-size: 22px;
      margin-bottom: 20px;
    }
    .buttons {
      width: 220px;
      margin: 40px auto 30px;
      * {
        width: 47%;
        margin: 0 3px;
      }
    }
  }
}

.verticalStepperWrapper {
  display: flex;
  .steps {
    margin: 1.5rem 0 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    .step {
      display: flex;
      flex-direction: column;
      width: 90%;
      margin: 0 auto;
      .circle {
        min-height: 30px;
        min-width: 30px;
        border-radius: 50%;
        color: #000000;
        text-align: center;
        line-height: 30px;
        background-color: #e2e2e2;
        .tick {
          height: 8px;
          position: relative;
          top: 8px;
          left: 6px;
          width: 16px;
          border-left: 2px solid #ffffff;
          border-bottom: 2px solid #ffffff;
          transform: rotate(-55deg);
        }
      }
      .markedCircle {
        background-color: #3366ff;
        color: #ffffff;
      }
      .line {
        height: 40px;
        width: 2px;
        background-color: #f1f1f1;
        align-self: center;
        margin: 0 15px;
      }
      .markedLine {
        background-color: #3366ff;
      }
    }
  }
  .content {
    width: 100%;
    text-align: center;
    .contentHeader {
      font-size: 44px;
      margin: 70px 16px;
    }
    .contentText {
      font-size: 22px;
      margin-bottom: 20px;
    }
    .buttons {
      width: 100%;
      max-width: 220px;
      margin: 40px auto 0;
      * {
        width: 47%;
        margin: 0 3px;
      }
    }
  }
}
.displayFlex {
  display: flex;
}
</style>