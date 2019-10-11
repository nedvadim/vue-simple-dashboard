<template>
  <div>
    <label class="radio-item">
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
</template>
<script>
export default {
  props: ["data"]
};
</script>
<style lang="scss" scoped>
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
</style>