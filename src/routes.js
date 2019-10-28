import Home from "./components/Home.vue";

// Layouts folder
import Lists from "./components/side-menu/layouts-folder/Lists/Lists.vue";
import Stepper from "./components/side-menu/layouts-folder/Stepper/Stepper.vue";
import Tabs from "./components/side-menu/layouts-folder/Tabs/Tabs.vue";

// sub routes for Tabs/tab2.vue component
import RouteTab1 from "./components/side-menu/layouts-folder/Tabs/tab2Route1.vue";
import RouteTab2 from "./components/side-menu/layouts-folder/Tabs/tab2Route2.vue";

// Forms
import FormInputs from "./components/side-menu/forms-folder/FormInputs/FormInputs.vue";
import Buttons from "./components/side-menu/forms-folder/Buttons/Buttons.vue";
import FormLayouts from "./components/side-menu/forms-folder/FormLayouts/FormLayouts.vue";
// UI Features folder
import Grid from "./components/side-menu/ui-features-folder/Grid.vue";
// Modals & Overlays
import Dialog from "./components/side-menu/modals-and-overlays-folder/Dialog/Dialog.vue";
import Popover from "./components/side-menu/modals-and-overlays-folder/Popover/Popover.vue";
import Toastr from "./components/side-menu/modals-and-overlays-folder/Toastr/Toastr.vue";
// Extra Components
import Spinner from "./components/side-menu/extra-components-folder/Spinner/Spinner.vue";

export const routes = [
  { path: "/", component: Home },
  // Layouts Folder===========================================
  { path: "/lists", component: Lists },
  { path: "/stepper", component: Stepper },
  {
    path: "/tabs",
    component: Tabs,
    children: [
      { path: "/tabs/", component: RouteTab1 },
      { path: "/tabs/route-tab-1", component: RouteTab1 },
      { path: "/tabs/route-tab-2", component: RouteTab2 }
    ]
  },
  // Forms Folder==============================================
  { path: "/form-inputs", component: FormInputs },
  { path: "/buttons", component: Buttons },
  { path: "/form-layouts", component: FormLayouts },
  // Modals & Overlays=========================================
  { path: "/dialog", component: Dialog },
  { path: "/popover", component: Popover },
  { path: "/toastr", component: Toastr },
  // Extra Components Folder===================================
  { path: "/spinner", component: Spinner },
  // UI Features Folder========================================
  { path: "/grid", component: Grid }
];
