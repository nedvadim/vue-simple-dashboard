<template>
  <bg header="Custom Grid System">
    <p class="margin-top">"c-" is a default prefix which always should be initialized</p>
    <div class="my-container">
      <div class="my-row">
        <div class="box c-9">[c-9]</div>
        <div class="box c-3">[c-3]</div>
      </div>
    </div>
    <p>"c-md-" is a special prefix for medium screens and up</p>
    <p>without initialization default "c-N" value, box sizes would be unhandled on diferent screen sizes as in the example below</p>
    <div class="my-container">
      <div class="my-row">
        <div class="box c-md-4">[c-md-4]</div>
        <div class="box c-md-4">[c-md-4]</div>
        <div class="box c-md-4">[c-md-4]</div>
      </div>
    </div>
    <p>With the default prefix "c-" we can handle sizes of boxes which are not considered as medium</p>
    <div class="my-container">
      <div class="my-row">
        <div class="box c-12 c-md-4">[c-12][c-md-4]</div>
        <div class="box c-12 c-md-4">[c-12][c-md-4]</div>
        <div class="box c-12 c-md-4">[c-12][c-md-4]</div>
      </div>
    </div>

    <p>You can specify box-spreading for all screen sizes, but do not forget to specify default "c-" prefix which is affects smallest screens</p>
    <div class="my-container">
      <div class="my-row">
        <div
          class="box c-12 c-sm-4 c-md-3 c-lg-4 c-xl-10"
        >[c-12] [c-sm-4] [c-md-3] [c-lg-4] [c-xl-10]</div>
        <div class="box c-12 c-sm-3 c-md-6 c-lg-4 c-xl-1">[c-12] [c-sm-3] [c-md-6] [c-lg-4] [c-xl-1]</div>
        <div class="box c-12 c-sm-5 c-md-3 c-lg-4 c-xl-1">[c-12] [c-sm-5] [c-md-3] [c-lg-4] [c-xl-1]</div>
      </div>
    </div>
  </bg>
</template>
<script>
import bg from "../WhiteBack";
export default {
  components: {
    bg
  }
};
</script>>
<style lang="scss">
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d4d4d4;
  border-radius: 4px;
  min-height: 70px;
  font-size: 16px;
}
.margin-top {
  margin-top: 10px;
}
</style>