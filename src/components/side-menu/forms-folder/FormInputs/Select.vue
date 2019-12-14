<template>
  <div class="select-wrapper" :class="{selectWrapperActive: this.isSelectActive}">
    <select @blur="isSelectActive = false" @click="toggleActive()">
      <option v-for="o in options" :key="o.id" :value="o.value">{{o.option}}</option>
    </select>
  </div>
</template>
<script>
import WhiteBackground from "../../WhiteBack";
import bg from "../../WhiteBack";
export default {
  props: ["options"],
  components: {
    appWhiteBackground: WhiteBackground,
    bg
  },
  data() {
    return {
      isSelectActive: false
    };
  },
  methods: {
    toggleActive() {
      this.isSelectActive = !this.isSelectActive;
    }
  }
};
</script>
<style lang="scss" scoped>
.select-wrapper {
  select {
    width: 60%;
    margin: 0.5rem 0;
    padding: 0.5rem;
    border-radius: 5px;
    appearance: none;
    &:focus {
      outline: none;
      box-shadow: 0px 0px 0px 5px #e6e6e6;
    }
  }
  &::after {
    content: "";
    height: 10px;
    width: 10px;
    border-bottom: 1px solid black;
    border-left: 1px solid black;

    transform: rotate(135deg);
    display: inline-block;
    position: relative;
    top: 40%;
    right: 25px;
    pointer-events: none;
    transition: all 0.2s;
  }
}
.selectWrapperActive {
  &::after {
    content: "";
    transform: rotate(-45deg);
  }
}
</style>