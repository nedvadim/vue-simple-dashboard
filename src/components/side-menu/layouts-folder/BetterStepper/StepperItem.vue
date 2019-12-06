<template>
  <div class="stepper-wrapper">
    <div class="steps">
      <div class="step" v-for="(s, index) in data.steps" :key="s">
        <div class="circle" v-bind:class="{markedCircle: markedSteps[index]}">
          <!-- <div class="tick"></div> -->
          <span>{{s}}</span>
        </div>
        <div class="line" v-if="s!==data.steps" :class="[getLineSizeClass]"></div>
      </div>
    </div>

    <div class="content">
      <div v-for="(content, index) in data.content" :key="index">
        <h1 v-if="markedSteps[index] === true">{{content.header}}</h1>
      </div>
    </div>
    <div class="buttons">
      <my-btn>Prev</my-btn>
      <my-btn @click.native="nextStep">Next</my-btn>
    </div>
  </div>
</template>
<script>
import myBtn from "../../forms-folder/Buttons/ButtonItem";
export default {
  data() {
    return {
      lineClasses: ["lineLarge", "lineMiddle", "lineSmall"],
      markedSteps: []
    };
  },
  props: {
    data: {
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
    getLineSizeClass() {
      return this.lineClasses[this.data.steps - 3];
    }
  },
  methods: {
    nextStep() {
      console.log("in next()");
      for (let i = 0; i < this.data.steps; i++) {
        console.log("in for");
        if (this.markedSteps[i] === false) {
          console.log(this.markedSteps[i]);
          this.markedSteps[i] = true;
          console.log(this.markedSteps[i]);
          return;
        }
      }
    }
  },
  created: function() {
    for (var i = 0; i < this.data.steps; i++) {
      this.markedSteps[i] = false;
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
      width: 39.1em;
    }
  }
}
</style>