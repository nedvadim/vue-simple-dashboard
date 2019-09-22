<template>
  <div>
    <div class="list-header">
      <p>{{content.listHeader}}</p>
    </div>
    <div class="list-container">
      <div class="list">
        <ul>
          <li v-for="con in content.descriptions">
            <div class="list-element">
              <div class="circle">
                <p>{{con.firstLetters}}</p>
              </div>
              <div class="list-descriptions">
                <p>{{con.listElementString}}</p>
                <p class="description">{{con.description}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["content"]
};
</script>
<style lang="scss" scoped>
$borderColor: #a0a0a0;
.list-header {
  width: 100%;
  height: 50px;
  background-color: #f5f5f5;
  padding: 15px;
  p {
    font-size: 25px;
    border-bottom: 1px solid $borderColor;
  }
}
.list-container {
  background-color: #f5f5f5;
  padding: 0 15px 15px 15px;
  height: 263px;
  overflow-y: scroll;
  li {
    list-style: none;
    padding: 10px;
    border-bottom: 1px solid #cccccc;
    .list-element {
      display: flex;
      .circle {
        height: 45px;
        width: 45px;
        border-radius: 50%;
        border: 1px solid rgb(212, 212, 212);
        p {
          text-align: center;
          vertical-align: middle;
          line-height: 40px;
        }
      }
      .list-descriptions {
        justify-self: center;
        align-self: center;
        margin-left: 10px;
        .description {
          font-size: 12px;
        }
      }
    }
  }
}
</style>

