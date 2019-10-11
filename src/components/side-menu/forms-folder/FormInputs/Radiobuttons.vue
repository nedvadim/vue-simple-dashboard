<template>
  <div class="radiobuttons-radios-container">
    <div class="radiobuttons-radios-header">
      <p>Radio Buttons</p>
    </div>

    <div class="radio-group">
      <app-radiobutton-item v-for="data in RadiobuttonsData" :key="data.id" :data="data"></app-radiobutton-item>
    </div>
  </div>
</template>

<script>
import RadiobuttonItem from "./RadiobuttonItem";
export default {
  components: {
    appRadiobuttonItem: RadiobuttonItem
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
}
</style>