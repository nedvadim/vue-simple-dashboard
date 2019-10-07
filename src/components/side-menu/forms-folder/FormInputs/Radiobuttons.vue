<template>
  <div class="radiobuttons-radios-container">
    <div class="radiobuttons-radios-header">
      <p>Radio Buttons</p>
    </div>

    <div class="radio-group">
      <label class="radio-item" v-for="data in RadiobuttonsData" :key="data.id">
        {{data.value}}
        <input
          type="radio"
          name="data.name"
          id="data.radioId"
          value="data.radioId"
          checked="checked"
        />
        <span class="marked"></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: ["RadiobuttonsData"]
};
</script>
<style lang="scss" scoped>
.radiobuttons-radios-container {
  background-color: $component-bg-color;
  padding: 15px;
  height: fit-content;
  width: $component-width;
  margin: $margin-container;
  .radiobuttons-radios-header {
    p {
      padding-bottom: 10px;
      font-size: 25px;
      border-bottom: 1px solid $components-header-border-color;
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
    }
  }
}
</style>