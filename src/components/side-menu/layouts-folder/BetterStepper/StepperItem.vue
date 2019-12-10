<template>
  <div class="stepper-wrapper">
    <div class="steps">
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
    <div class="content">
      <div v-for="(c, index) in dataStepper.content" :key="index">
        <div
          v-if="getLastMarkedStepIndex === index && getLastMarkedStepIndex !== dataStepper.steps"
        >
          <h1>{{c.header}}</h1>
          <p>{{c.text}}</p>
        </div>
      </div>
      <div v-if="getLastMarkedStepIndex === dataStepper.steps">
        <h1>{{dataStepper.finalStep.header}}</h1>
        <p>{{dataStepper.finalStep.text}}</p>
      </div>
    </div>
    <div class="buttons">
      <p>last marked: {{getLastMarkedStepIndex}}</p>
      <p>{{dataStepper.steps}}</p>
      <my-btn
        size="large"
        :type="getLastMarkedStepIndex === 0 ? 'disabled' : 'primary'"
        @click.native="prevStep"
      >Prev</my-btn>
      <my-btn
        size="large"
        :type="getLastMarkedStepIndex === dataStepper.steps ? 'disabled' :  'primary'"
        @click.native="nextStep"
      >Next</my-btn>
    </div>
  </div>
</template>
<script>
import myBtn from "../../forms-folder/Buttons/ButtonItem";
import Vue from "vue";
export default {
  data() {
    return {
      lineClasses: ["lineLarge", "lineMiddle", "lineSmall"],
      markedSteps: []
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
    }
  },
  components: {
    myBtn
  },
  computed: {
    getLastMarkedStepIndex() {
      return this.markedSteps.lastIndexOf(true) === -1
        ? 0
        : this.markedSteps.lastIndexOf(true) + 1;
    },
    getInitValuesForMarkedSteps() {
      return this.dataStepper.content.map(() => {
        return false;
      });
    },
    getLineSizeClass() {
      return this.lineClasses[this.dataStepper.steps - 3];
    },
    getMarkedSteps() {
      return this.markedSteps;
    }
  },
  methods: {
    nextStep() {
      console.log(this.getLastMarkedStepIndex);
      for (let i = 0; i < this.dataStepper.content.length; i++) {
        if (this.markedSteps[i] === false) {
          Vue.set(this.markedSteps, i, true);
          return;
        }
      }
    },
    prevStep() {
      for (let i = this.dataStepper.content.length - 1; i >= 0; i--) {
        console.log(this.markedSteps);
        if (this.markedSteps[i] === true) {
          Vue.set(this.markedSteps, i, false);
          console.log(this.markedSteps);
          return;
        }
      }
    }
  },
  beforeMount: function() {
    for (var i = 0; i < this.dataStepper.content.length; i++) {
      Vue.set(this.markedSteps, i, false);
    }
  }
};
</script>
<style lang="scss" scoped>
.steps {
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
      height: 3px;
      //width: 27%;
      background-color: #e2e2e2;
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
    width: 2%;
  }
}
.content {
  width: 40vw;
  text-align: center;
  margin: 0 auto;
  h1 {
    font-size: 44px;
  }
  p {
    font-size: 22px;
  }
}
.buttons {
  width: 220px;
  margin: 40px auto 0;
}
</style>