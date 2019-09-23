<template>
  <div>
    <div class="stepper-wrapper">
      <div class="steps">
        <!-- step 1 -->
        <div class="circle" v-bind:class="{ markedCircle: this.steps[0].isMarked }">1</div>
        <div class="line" v-bind:class="{ markedLine: this.steps[0].isMarked}"></div>
        <!-- step 2 -->
        <div class="circle" v-bind:class="{ markedCircle: this.steps[1].isMarked}">2</div>
        <div class="line" v-bind:class="{ markedLine: this.steps[1].isMarked}"></div>
        <!-- step 3 -->
        <div class="circle" v-bind:class="{ markedCircle: this.steps[2].isMarked }">3</div>
        <div class="line" v-bind:class="{ markedLine: this.steps[2].isMarked}"></div>
        <!-- step 4 -->
        <div class="circle" v-bind:class="{ markedCircle: this.steps[3].isMarked }">4</div>
      </div>
      <div class="content">
        <div v-if="markedSteps===0">
          <h1>Step One</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odio pariatur tenetur recusandae id? Saepe modi esse velit facere exercitationem?</p>
        </div>
        <div v-if="markedSteps===1">
          <h1>Step Two</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus debitis unde eius tempora non facilis, dolores ducimus!</p>
        </div>
        <div v-if="markedSteps===2">
          <h1>Step Three</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ab earum quos, aliquid labore sunt quasi deleniti, autem repudiandae nemo nisi commodi provident voluptas tempore beatae adipisci tenetur minus dignissimos? Libero beatae obcaecati perspiciatis fugiat qui sint dolorem laborum ut?</p>
        </div>
        <div v-if="markedSteps===3">
          <h1>Step Four</h1>
          <p>Almost there! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni.</p>
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