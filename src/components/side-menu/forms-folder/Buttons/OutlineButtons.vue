 <template>
  <bg header="Outline Buttons">
    <div class="outline-buttons">
      <app-button-item class="margin" type="primary" btnText="primary" :outline="true"></app-button-item>
      <app-button-item class="margin" type="success" btnText="success" :outline="true"></app-button-item>
      <app-button-item class="margin" type="warning" btnText="warning" :outline="true"></app-button-item>
      <app-button-item class="margin" type="danger" btnText="danger" :outline="true"></app-button-item>
      <app-button-item class="margin" type="info" btnText="info" :outline="true"></app-button-item>
      <app-button-item class="margin" type="disabled" btnText="disabled"></app-button-item>
    </div>
  </bg>
</template>
<script>
import ButtonItem from "./ButtonItem";
import bg from "../../WhiteBack";
export default {
  components: {
    appButtonItem: ButtonItem,
    bg
  }
};
</script>
<style lang="scss" scoped>
.outline-buttons {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}
.margin {
  margin: 0 20px 20px 0;
}
</style>