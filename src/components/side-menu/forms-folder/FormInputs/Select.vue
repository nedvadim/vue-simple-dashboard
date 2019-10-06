<template>
  <div class="select-container">
    <div class="select-header">
      <p>Select</p>
      <div class="select-wrapper" :class="{selectWrapperActive: this.isSelectActive}">
        <select @blur="isSelectActive = false" @click="toggleActive()">
          <option v-for="o in options" :key="o.id" :value="o.value">{{o.option}}</option>
        </select>
      </div>
    </div>
  </div>
</template>
<script>
import WhiteBackground from "../../WhiteBack";
export default {
  props: ["options"],
  components: {
    appWhiteBackground: WhiteBackground
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
.select-container {
  background-color: #f5f5f5;
  padding: 15px;
  height: fit-content;
  width: 100%;
  margin: 1.5em auto;
  .select-header {
    p {
      font-size: 25px;
      border-bottom: 1px solid #d3d3d3;
    }
  }
}

.select-wrapper {
  select {
    width: 40%;
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