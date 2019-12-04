<template>
  <bg header="Radio Buttons">
    <div class="radio-group">
      <app-radiobutton-item v-for="data in RadiobuttonsData" :key="data.id" :data="data"></app-radiobutton-item>
    </div>
  </bg>
</template>

<script>
import RadiobuttonItem from "./RadiobuttonItem";
import bg from "../../WhiteBack";
export default {
  components: {
    appRadiobuttonItem: RadiobuttonItem,
    bg
  },
  data() {
    return {
      RadiobuttonsData: [
        { id: 1, radioId: "north", name: "directions", value: "North" },
        { id: 2, radioId: "south", name: "directions", value: "South" },
        { id: 3, radioId: "east", name: "directions", value: "East" },
        { id: 4, radioId: "west", name: "directions", value: "West" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
/*radio buttons styling is everything that downwards*/
.radio-group {
  margin-top: 10px;
}
</style>