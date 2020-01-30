<template>
  <div class="select-wrapper" :class="{selectWrapperActive: this.isSelectActive}">
    <select @blur="isSelectActive = false" @click="toggleActive()" v-on="listeners">
      <option v-for="o in options" :key="o.id" :value="o.value">{{o.option}}</option>
    </select>
  </div>
</template>
<script>
export default {
  props: {
    selectValue: {
      type: String,
      required: true
    },
    options: {
      required: true
    }
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
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        change: value => {
          console.log("vot:" + event.target.value);
          this.$emit("change", event.target.value);
        }
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.select-wrapper {
  position: relative;
  select {
    width: 100%;
    padding: 0.3rem 0.5rem;
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
    transform: rotate(-46deg);
    display: inline-block;
    position: absolute;
    top: 12px;
    right: 16px;
    pointer-events: none;
    transition: all 0.2s;
  }
}
.selectWrapperActive {
  &::after {
    content: "";
    transform: rotate(136deg);
  }
}
</style>