<template>
  <div class="stepper-wrapper">
    <div class="steps">
      <div class="steps">
        <!-- step 1 -->
        <div class="circle" v-bind:class="{ markedCircle: this.steps[0].isMarked }">
          <div class="tick" v-if="isFirstStepMarked"></div>
          <span v-else>1</span>
        </div>
        <div class="line" v-bind:class="{ markedLine: this.steps[0].isMarked}"></div>
        <!-- step 2 -->
        <div class="circle" v-bind:class="{ markedCircle: this.steps[1].isMarked}">
          <div class="tick" v-if="isSecondStepMarked"></div>
          <span v-else>2</span>
        </div>
        <div class="line" v-bind:class="{ markedLine: this.steps[1].isMarked}"></div>
        <!-- step 3 -->
        <div class="circle" v-bind:class="{ markedCircle: this.steps[2].isMarked }">
          <div class="tick" v-if="isThirdStepMarked"></div>
          <span v-else>3</span>
        </div>
      </div>
    </div>
    <div class="inputs">
      <input
        v-if="markedSteps===0"
        type="text"
        placeholder="Enter your name"
        v-model="inputs[0]"
        autofocus
      />
      <input
        v-if="markedSteps===1"
        type="text"
        placeholder="Enter your country"
        v-model="inputs[1]"
        autofocus
      />
      <input
        v-if="markedSteps===2"
        type="text"
        placeholder="Enter something"
        v-model="inputs[2]"
        autofocus
      />
      <h1 v-if="markedSteps===stepsQuantity">SUCCESS!</h1>
    </div>
    <div class="buttons">
      <button
        @click="prevStep()"
        class="button"
        v-bind:class="{inactiveButton: isNoneStepIsMarked}"
      >Prev</button>
      <button @click="nextStep()" class="button" v-bind:class="{inactiveButton: isAllStepsMarked}">
        <span v-if="markedSteps===2">Confirm!</span>
        <span v-else>Next</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      steps: [{ isMarked: false }, { isMarked: false }, { isMarked: false }],
      markedSteps: 0,
      inputs: ["", "", ""],
      stepsQuantity: 3
    };
  },
  computed: {
    isAllStepsMarked() {
      return this.markedSteps === this.stepsQuantity;
    },
    isNoneStepIsMarked() {
      return this.markedSteps === 0;
    },
    isFirstStepMarked() {
      return this.steps[0].isMarked;
    },
    isSecondStepMarked() {
      return this.steps[1].isMarked;
    },
    isThirdStepMarked() {
      return this.steps[2].isMarked;
    },
    isFourthStepMarked() {
      return this.steps[3].isMarked;
    }
  },
  methods: {
    nextStep() {
      for (let i = 0; i < this.steps.length; i++) {
        if (this.steps[i].isMarked === false && this.inputs[i].length > 0) {
          this.steps[i].isMarked = true;
          return;
        }
      }
    },
    prevStep() {
      for (let i = this.steps.length - 1; i >= 0; i--) {
        if (this.steps[i].isMarked === true) {
          this.steps[i].isMarked = false;
          return;
        }
      }
    }
  },
  watch: {
    steps: {
      handler: function() {
        var marked = 0;
        for (let i = 0; i < this.steps.length; i++) {
          if (this.steps[i].isMarked === true) {
            marked++;
          }
        }
        this.markedSteps = marked;
      },
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
.stepper-wrapper {
  width: $component-width;
  margin: $margin-container;
  background-color: $component-bg-color;
  padding: 25px;
  .steps {
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
      width: 34%;
      background-color: #e2e2e2;
      align-self: center;
      margin: 0 15px 0 15px;
    }
    .markedLine {
      background-color: #3366ff;
    }
  }
  .content {
    width: 40vw;
    text-align: center;
    margin: 0 auto;
  }
  .buttons {
    width: 240px;
    margin: 40px auto 0;

    .button {
      background: #3366ff;
      border: 2px solid #0030c0;
      border-radius: 3px;
      height: 50px;
      width: 110px;
      outline: none;
      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
      span {
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
      }
      cursor: pointer;
      &:last-of-type {
        margin-left: 20px;
      }
    }
    .inactiveButton {
      border: none;
      background-color: #e2e2e2;
      cursor: auto;
    }
  }
  .inputs {
    width: 100%;
    margin: 32px 0;
    input {
      width: 100%;
      font-size: 28px;
      padding: 5px 10px 5px 10px;
      border-radius: 5px;
      border: 1px solid #e0e0e0;
      outline-color: #c8c8c8;
    }
    h1 {
      text-align: center;
    }
  }
}
</style>