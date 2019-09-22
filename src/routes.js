import Home from "./components/Home.vue";
import Lists from "./components/side-menu/layouts-folder/Lists/Lists.vue";
import Stepper from "./components/side-menu/layouts-folder/Stepper/Stepper.vue";
import Grid from "./components/side-menu/ui-features-folder/Grid.vue";

export const routes = [
  { path: "/", component: Home },
  { path: "/lists", component: Lists },
  { path: "/stepper", component: Stepper },
  { path: "/grid", component: Grid }
];
