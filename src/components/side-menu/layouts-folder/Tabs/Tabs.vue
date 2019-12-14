<template>
  <div class="tabs-wrapper">
    <div class="my-container">
      <div class="my-row">
        <app-tab-one class="c-12" :tabData="tab1Data"></app-tab-one>
        <app-tab-two class="c-12" :tabData="tab2Data"></app-tab-two>
      </div>
    </div>

  </div>
</template>


<script>
import tabOne from "./tab1";
import tabTwo from "./tab2";
export default {
  data() {
    return {
      tab1Data: [
        {
          id: 1,
          tabName: "Tab1",
          tabContent:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci saepe reprehenderit, neque alias reiciendis, in modi deserunt sunt minima cum fugiat ipsum, odit numquam beatae nesciunt enim natus dolor exercitationem aspernatur! Qui ut eaque aperiam omnis adipisci laudantium quod quo magni provident veniam eligendi animi, a voluptatum? Voluptates, odit minima. Dolorem mollitia sint possimus, autem quo qui veritatis voluptas voluptate placeat quia doloremque soluta illum maiores? Aperiam autem architecto ullam odit minus, porro at tempore aliquam repudiandae repellendus, voluptatem voluptas magni nam possimus dicta voluptates libero rem neque necessitatibus! Odio accusamus nemo doloribus amet, maiores ab commodi quas quisquam consectetur."
        },
        {
          id: 2,
          tabName: "Tab2",
          tabContent:
            "Qui ut eaque aperiam omnis adipisci laudantium quod quo magni provident veniam eligendi animi, a voluptatum? Voluptates, odit minima. Dolorem mollitia sint possimus, autem quo qui veritatis voluptas voluptate placeat quia doloremque soluta illum maiores? Aperiam autem architecto ullam odit minus, porro at tempore aliquam repudiandae repellendus, voluptatem voluptas magni nam possimus dicta voluptates libero rem neque necessitatibus! Odio accusamus nemo doloribus amet, maiores ab commodi quas quisquam consectetur."
        },
        {
          id: 3,
          tabName: "Tab3",
          tabContent:
            "Aperiam autem architecto ullam odit minus, porro at tempore aliquam repudiandae repellendus, voluptatem voluptas magni nam possimus dicta voluptates libero rem neque necessitatibus! Qui ut eaque aperiam omnis adipisci laudantium quod quo magni provident veniam eligendi animi, a voluptatum? Voluptates, odit minima. Dolorem mollitia sint possimus, autem quo qui veritatis voluptas voluptate placeat quia doloremque soluta illum maiores? Aperiam autem architecto ullam odit minus, porro at tempore aliquam repudiandae repellendus, voluptatem voluptas magni nam possimus dicta voluptates libero rem neque necessitatibus! Odio accusamus nemo doloribus amet, maiores ab commodi quas quisquam consectetur."
        }
        // { id: 4, tabName: "Tab4", tabContent: "Ok2 world!" },
        // { id: 5, tabName: "Tab5", tabContent: "Ok3 world!" }
        // { id: 6, tabName: "Tab6", tabContent: "Ok world!" },
        // { id: 7, tabName: "Tab7", tabContent: "Ok world!" },
        // { id: 8, tabName: "Tab8", tabContent: "Ok world!" },
        // { id: 9, tabName: "Tab9", tabContent: "Ok world!" },
        // { id: 10, tabName: "Tab10", tabContent: "Ok world!" }
      ],
      tab2Data: [
        { id: 1, tabName: "Route-Tab1", tabLink: "/tabs/route-tab-1" },
        { id: 2, tabName: "Route-Tab2", tabLink: "/tabs/route-tab-2" }
      ]
    };
  },
  components: {
    appTabOne: tabOne,
    appTabTwo: tabTwo
  }
};
</script>
<style lang="scss" scoped>
.tabs-wrapper {
  width: $component-width;
}
</style>