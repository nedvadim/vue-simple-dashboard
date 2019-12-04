<template>
  <bg header="Validation States">
    <div class="inputs">
      <app-text-input-item class="margin" :inputPlaceholder="'Primary Input'" :status="'primary'"></app-text-input-item>
      <app-text-input-item class="margin" :inputPlaceholder="'Success Input'" :status="'success'"></app-text-input-item>
      <app-text-input-item class="margin" :inputPlaceholder="'Warning Input'" :status="'warning'"></app-text-input-item>
      <app-text-input-item class="margin" :inputPlaceholder="'Danger Input'" :status="'danger'"></app-text-input-item>
      <app-text-input-item class="margin" :inputPlaceholder="'Info Input'" :status="'info'"></app-text-input-item>
    </div>

    <div class="checkboxes">
      <app-checkbox-item class="margin-right" :data="successCheck" :status="'success'"></app-checkbox-item>
      <app-checkbox-item class="margin-right" :data="warningCheck" :status="'warning'"></app-checkbox-item>
      <app-checkbox-item class="margin-right" :data="dangerCheck" :status="'danger'"></app-checkbox-item>
    </div>
  </bg>
</template>
<script>
import TextInputItem from "./TextInputItem";
import CheckboxItem from "./CheckboxItem";
import bg from "../../WhiteBack";
export default {
  components: {
    appTextInputItem: TextInputItem,
    appCheckboxItem: CheckboxItem,
    bg
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
.margin {
  margin: 10px 0;
}

.checkboxes {
  margin: 15px 0 15px 0;
  display: flex;
  flex-wrap: wrap;
  .margin-right {
    margin-right: 40px;
  }
}
</style>