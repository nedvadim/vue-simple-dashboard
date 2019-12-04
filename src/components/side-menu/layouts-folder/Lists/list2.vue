<template>
  <div>
    <div class="list-container">
      <div class="list-header">
        <p>{{content.title}}</p>
      </div>
      <div class="list">
        <ul>
          <li v-for="(con, index) in content.list" :key="index">
            <div class="list-element">
              <div class="circle">
                <p>{{getTwo(index)}}</p>
              </div>
              <div class="list-descriptions">
                <p>{{con.name}}</p>
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
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  methods: {
    getTwo(index) {
      return this.content.list[index].name
        .split(" ")
        .map(e => {
          return e[0];
        })
        .join("");
    }
  },
  created: function() {}
};
</script>
<style lang="scss" scoped>
.list-container {
  background-color: $component-bg-color;
  width: $component-width;
  padding: 0 15px 15px 15px;
  margin: $margin-container;
  position: relative;
  .list-header {
    width: $component-width;
    background-color: $component-bg-color;
    padding: 15px;
    position: relative;
    border-bottom: 1px solid #d3d3d3;
    p {
      font-size: 25px;
    }
  }
  .list {
    overflow-y: scroll;
    height: 323px;
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
}
</style>

