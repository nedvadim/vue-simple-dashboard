<template>
  <div>
    <bg header="Default Inputs">
      <div class="app-inputs">
        <app-text-input-item class="margin" :inputPlaceholder="'Project'"></app-text-input-item>
        <app-text-input-item class="margin" :inputPlaceholder="'FullName'"></app-text-input-item>
        <app-text-input-item class="margin" :inputPlaceholder="'Password'" :inputType="'password'"></app-text-input-item>
        <app-text-input-item
          class="margin"
          :inputPlaceholder="'Rectangle Border'"
          :shape="'rectangle'"
        ></app-text-input-item>
        <app-text-input-item
          class="margin"
          :inputPlaceholder="'Semi-round Border'"
          :shape="'semi-round'"
        ></app-text-input-item>
        <app-text-input-item class="margin" :inputPlaceholder="'Round Border'" :shape="'round'"></app-text-input-item>
        <app-text-input-item class="margin" :inputPlaceholder="'Disabled'" :disabled="true"></app-text-input-item>
        <app-text-input-item
          class="margin"
          :inputPlaceholder="'Text Area'"
          :inputType="'textarea'"
          :shape="'semi-round'"
        ></app-text-input-item>
        <app-text-input-item class="margin" :inputPlaceholder="'Small'" :size="'small'"></app-text-input-item>
        <app-text-input-item class="margin" :inputPlaceholder="'Large'" :size="'large'"></app-text-input-item>
      </div>
    </bg>
  </div>
</template>
<script>
import TextInputItem from "./TextInputItem";
import bg from "../../WhiteBack";
export default {
  components: {
    appTextInputItem: TextInputItem,
    bg
  }
};
</script>
<style lang="scss" scoped>
.app-input {
  //display: block;
  margin-top: 20px;
  width: 100%;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid #cecece;
  transition: all 0.2s;
  &::placeholder {
    color: #c8c8c8;
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 5px #e6e6e6;
  }
}

.rect {
  border-radius: 0;
}
.semi-round {
  border-radius: 14px;
}
.round {
  border-radius: 30px;
}
input[type="text"]:disabled {
  background-color: #e2e2e2;
}
.app-textarea {
  box-sizing: border-box;
  min-height: 150px;
  min-width: 100%;
  resize: none;
}
.small {
  padding: 2px 12px;
}
.large {
  padding: 12px;
}
.margin {
  margin: 10px 0;
}
</style>