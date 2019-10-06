<template>
  <div class="radiobuttons-radios-container">
    <div class="radiobuttons-radios-header">
      <p>Radio Buttons</p>
    </div>

    <div class="radio-group">
      <label class="radio-item" v-for="data in RadiobuttonsData" :key="data.id">
        {{data.value}}
        <input type="radio" name="data.name" id="data.checkId" value="data.checkId" />
        <span class="marked"></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["RadiobuttonsData"]
};
</script>
<style lang="scss" scoped>
.radiobuttons-radios-container {
  background-color: #f5f5f5;
  padding: 15px;
  height: fit-content;
  width: 100%;
  margin: 1.5em auto;
  .radiobuttons-radios-header {
    p {
      padding-bottom: 10px;
      font-size: 25px;
      border-bottom: 1px solid #d3d3d3;
    }
  }
}

/*radio buttons styling is everything that downwards*/
.radio-group {
  margin-top: 10px;
  .radio-item {
    display: block;
    position: relative;
    margin-bottom: 2px;
    padding-left: 25px;
    user-select: none;
    input[type="radio"] {
      position: absolute;
      opacity: 0;
      height: 0;
      width: 0;
      cursor: pointer;
      &:checked {
        ~ {
          .marked {
            border: 1px solid #1064ff;
            &:after {
              display: block;
            }
          }
        }
      }
    }
    .marked {
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background-color: #eaeaea;
      border: 1px solid gray;
      &:hover {
        border: 1px solid #1064ff;
      }
      &:after {
        content: "";
        position: absolute;
        display: none;
        top: 2px;
        left: 2px;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background-color: #1064ff;
      }
      &:after {
        content: "";
        position: absolute;
        display: none;
      }
    }
  }
}
</style>