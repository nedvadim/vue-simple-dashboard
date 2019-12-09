<template>
  <div class="stepper-wrapper">
    <div class="steps">
      <div class="step" v-for="s in dataStepper.steps" :key="s">
        <div class="circle" v-bind:class="{markedCircle: markedSteps[s-1]}">
          <!-- <div class="tick"></div> -->
          <span>{{s}}</span>
        </div>
        <div class="line" v-if="s!==dataStepper.steps" :class="[getLineSizeClass]"></div>
      </div>
    </div>
    <p>{{markedSteps}}</p>
    <div class="content">
      <div v-for="(c, index) in dataStepper.content" :key="index">
        <h1 v-if="getLastMarkedStepIndex === index">{{c.header}}</h1>
      </div>
    </div>
    <div class="buttons">
      <my-btn @click="prevStep">Prev</my-btn>
      <my-btn @click="nextStep">Next</my-btn>
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
    // for (var i = 0; i < this.dataStepper.steps; i++) {
    //   Vue.set(this.markedSteps, i, false);
    // }
    // for (var i = 0; i < this.dataStepper.steps; i++) {
    //   this.markedSteps.splice(i, 1, false);
    // }
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
      width: 27%;
      background-color: #e2e2e2;
      align-self: center;
      margin: 0 15px 0 15px;
    }
    .linelarge {
      background-color: red;
    }
    .markedLine {
      background-color: #3366ff;
    }
    .lineSmall {
      width: 18em;
    }
    .lineMiddle {
      width: 25em;
    }
    .lineLarge {
      width: 10.1em; //39.1
    }
  }
}
</style>