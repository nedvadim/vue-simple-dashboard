import Home from "./components/Home.vue";
import List from "./components/side-menu/layouts-folder/List.vue";
import Stepper from "./components/side-menu/layouts-folder/Stepper.vue";
import Grid from "./components/side-menu/ui-features-folder/Grid.vue";

export const routes = [
  { path: "/", component: Home },
  { path: "/list", component: List },
  { path: "/stepper", component: Stepper },
  { path: "/grid", component: Grid }
];
