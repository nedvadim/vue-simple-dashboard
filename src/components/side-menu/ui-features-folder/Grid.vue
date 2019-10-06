<template>
  <div>
    <div class="grid-page-wrapper">
      <div class="content-wrapper">
        <h1 class="header">Grid System</h1>

        <p>"c-" is a default prefix which always should be initialized</p>
        <div class="my-container">
          <div class="my-row">
            <div class="box c-9">[c-9]</div>
            <div class="box c-3">[c-3]</div>
          </div>
        </div>
        <p>"c-md-" is a special prefix for medium screens and up</p>
        <p>without initialization default "c-N" value, box sizes would be unhandled on diferent screen sizes as the example below</p>
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
            <div
              class="box c-12 c-sm-3 c-md-6 c-lg-4 c-xl-1"
            >[c-12] [c-sm-3] [c-md-6] [c-lg-4] [c-xl-1]</div>
            <div
              class="box c-12 c-sm-5 c-md-3 c-lg-4 c-xl-1"
            >[c-12] [c-sm-5] [c-md-3] [c-lg-4] [c-xl-1]</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.grid-page-wrapper {
  width: 100%;
  margin: 1.5em auto;
  background-color: #f5f5f5;
  //box-shadow: 0px 0px 4px -1px black;

  .content-wrapper {
    padding: 30px;
    .header {
      border-bottom: 1px solid #b8b8b8;
      margin-bottom: 25px;
    }
    .box {
      background-color: #d4d4d4;
      text-align: center;
      border-radius: 4px;
      min-height: 50px;
      font-size: 12px;
    }
  }
}
</style>