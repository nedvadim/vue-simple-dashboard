<template>
  <div class="validation-states-container">
    <div class="validation-states-header">
      <p>Validation States</p>
    </div>
    <div class="inputs">
      <app-text-input-item :inputPlaceholder="'Primary Input'" :status="'primary'"></app-text-input-item>
      <app-text-input-item :inputPlaceholder="'Success Input'" :status="'success'"></app-text-input-item>
      <app-text-input-item :inputPlaceholder="'Warning Input'" :status="'warning'"></app-text-input-item>
      <app-text-input-item :inputPlaceholder="'Danger Input'" :status="'danger'"></app-text-input-item>
      <app-text-input-item :inputPlaceholder="'Info Input'" :status="'info'"></app-text-input-item>
    </div>

    <div class="checkboxes">
      <app-checkbox-item class="margin-right" :data="successCheck" :status="'success'"></app-checkbox-item>
      <app-checkbox-item class="margin-right" :data="warningCheck" :status="'warning'"></app-checkbox-item>
      <app-checkbox-item class="margin-right" :data="dangerCheck" :status="'danger'"></app-checkbox-item>
    </div>
  </div>
</template>
<script>
import TextInputItem from "./TextInputItem";
import CheckboxItem from "./CheckboxItem";
export default {
  components: {
    appTextInputItem: TextInputItem,
    appCheckboxItem: CheckboxItem
  },
  data() {
    return {
      successCheck: {
        id: 1,
        name: "Successss",
        value: "success",
        checked: false
      },
      warningCheck: {
        id: 2,
        name: "Warning",
        value: "warning",
        checked: false
      },
      dangerCheck: { id: 3, name: "Danger", value: "danger", checked: false }
    };
  }
};
</script>
<style lang="scss" scoped>
.validation-states-container {
  background-color: $component-bg-color;
  padding: 15px;
  height: fit-content;
  width: $component-width;
  margin: $margin-container;
  .validation-states-header {
    p {
      font-size: 25px;
      border-bottom: 1px solid $components-header-border-color;
    }
  }
}

//checkboxes general styling -------------------------------
.checkboxes {
  margin: 15px 0 15px 0;
  display: flex;
  flex-wrap: wrap;
  .margin-right {
    margin-right: 40px;
  }
}
</style>