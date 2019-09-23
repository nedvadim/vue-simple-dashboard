<template>
  <div>
    <div class="stepper-wrapper">
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
        <div class="line" v-bind:class="{ markedLine: this.steps[2].isMarked}"></div>
        <!-- step 4 -->
        <div class="circle" v-bind:class="{ markedCircle: this.steps[3].isMarked }">
          <div class="tick" v-if="isFourthStepMarked"></div>
          <span v-else>4</span>
        </div>
      </div>
      <div class="content">
        <div v-if="markedSteps===0">
          <h1>Step One</h1>
          <p>In 1994, Williams and six other young filmmakers, including P.J. Pesce and Academy Award nominee Bernard Joffa (the 1990 Best Live Action Short 'Senzeni Na?'), were featured in movie journalist Billy Frolick's book called 'What I Really Want to Do Is Direct: Seven Film School Graduates Go to Hollywood'. The book followed the lives of seven young, would-be directors over three years as they struggled with the ups-and-downs of the Hollywood world.</p>
        </div>
        <div v-if="markedSteps===1">
          <h1>Step Two</h1>
          <p>A summer-stock revival, including Bill "Bojangles" Robinson, produced by Cheryl Crawford, played for one week in 1941 at the Maplewood Theater, in Maplewood, New Jersey.</p>
        </div>
        <div v-if="markedSteps===2">
          <h1>Step Three</h1>
          <p>The rebuilding took place at the Salt River Works in Cape Town and was based on the principles developed by Argentinian mechanical engineer L.D. Porta.</p>
        </div>
        <div v-if="markedSteps===3">
          <h1>Step Four</h1>
          <p>In biology, naturalisation (or naturalization) is any process by which a non-native organism or species spreads into the wild and its reproduction is sufficient to maintain its population. Such populations are said to be naturalised.Some populations do not sustain themselves reproductively, but exist because of continued influx from elsewhere. Such a non-sustaining population, or the individuals within it, are said to be adventive.</p>
        </div>
        <div v-if="markedSteps===4">
          <h1>SUCCESS!</h1>
        </div>
      </div>
      <div class="buttons">
        <button
          @click="prevStep()"
          class="button"
          v-bind:class="{inactiveButton: isNoneStepIsMarked}"
        >Prev</button>
        <button
          @click="nextStep()"
          class="button"
          v-bind:class="{inactiveButton: isAllStepsMarked}"
        >Next</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      steps: [
        { isMarked: false },
        { isMarked: false },
        { isMarked: false },
        { isMarked: false }
      ],
      markedSteps: 0
    };
  },
  computed: {
    isAllStepsMarked() {
      return this.markedSteps === 4;
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
        if (this.steps[i].isMarked === false) {
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
  width: 95%;
  margin: 1.5em auto;
  background-color: #f5f5f5;
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
      width: 27%;
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
    width: 220px;
    margin: 40px auto 0;

    .button {
      background: #3366ff;
      border: 2px solid #0030c0;
      color: #fff;
      border-radius: 3px;
      height: 50px;
      width: 100px;
      text-transform: uppercase;
      font-weight: bold;
      outline: none;
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
}
</style>