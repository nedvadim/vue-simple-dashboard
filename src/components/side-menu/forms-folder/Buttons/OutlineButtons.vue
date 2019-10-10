 <template>
  <div class="outline-buttons-container">
    <div class="outline-buttons-header">
      <p>Outline Buttons</p>
      <div class="outline-buttons">
        <app-button-item class="margin" type="default" btnText="default" :outline="true"></app-button-item>
        <app-button-item class="margin" type="success" btnText="success" :outline="true"></app-button-item>
        <app-button-item class="margin" type="warning" btnText="warning" :outline="true"></app-button-item>
        <app-button-item class="margin" type="danger" btnText="danger" :outline="true"></app-button-item>
        <app-button-item class="margin" type="info" btnText="info" :outline="true"></app-button-item>
        <app-button-item class="margin" type="disabled" btnText="disabled"></app-button-item>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonItem from "./ButtonItem";
export default {
  components: {
    appButtonItem: ButtonItem
  }
};
</script>
<style lang="scss" scoped>
.outline-buttons-container {
  background-color: $component-bg-color;
  padding: 15px;
  height: fit-content;
  width: $component-width;
  margin: $margin-container;
  .outline-buttons-header {
    p {
      font-size: 25px;
      border-bottom: 1px solid $components-header-border-color;
    }
  }
}
.outline-buttons {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}
.margin {
  margin: 0 20px 20px 0;
}
</style>