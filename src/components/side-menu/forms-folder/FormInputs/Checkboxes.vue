<template>
  <div class="checkboxes-container">
    <div class="checkboxes-header">
      <p>Checkboxes</p>
    </div>
    <div class="checkbox-group">
      <label class="checkbox-item" v-for="data in CheckboxesData" :key="data.id">
        {{data.name}}
        <input type="checkbox" name="data.name" value="data.value" checked="checked" />
        <span class="marked"></span>
      </label>
    </div>
  </div>
</template>


<script>
export default {
  props: ["CheckboxesData"]
};
</script>

<style lang="scss" scoped>
.checkboxes-container {
  background-color: $component-bg-color;
  padding: 15px;
  height: fit-content;
  width: $component-width;
  margin: $margin-container;
  .checkboxes-header {
    p {
      font-size: 25px;
      border-bottom: 1px solid $components-header-border-color;
    }
  }
}
.checkbox-group {
  margin-top: 10px;
  .checkbox-item {
    display: block;
    position: relative;
    margin-bottom: 2px;
    padding-left: 25px;
    user-select: none;
    input[type="checkbox"] {
      position: absolute;
      opacity: 0;
      height: 0;
      width: 0;
      cursor: pointer;
      &:checked {
        ~ {
          .marked {
            background-color: #1969ff;
            border: 1px solid #2e76fb;
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
      top: 5px;
      left: 0;
      width: 16px;
      height: 16px;
      background-color: #d8d8d8;
      border-radius: 5px;

      &:hover {
        opacity: 0.7;
        border: 1px solid #1969ff;
      }
      &:after {
        content: "";
        position: absolute;
        display: none;
        top: 4px;
        left: 3px;
        width: 6px;
        height: 3px;
        border-bottom: 2px solid #ffffff;
        border-left: 2px solid #ffffff;
        transform: rotate(-48deg);
      }
    }
  }
}
</style>