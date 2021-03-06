import Home from "./components/Home.vue";

// Layouts folder
import Lists from "./components/side-menu/layouts-folder/Lists/Lists.vue";
import Stepper from "./components/side-menu/layouts-folder/BetterStepper/BetterStepper.vue";
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
import Alert from "./components/side-menu/extra-components-folder/Alert/Alert.vue";
// Tables & Data
import SmartTable from "./components/side-menu/tables-and-data-folder/SmartTable/SmartTable.vue";
import TreeGrid from "./components/side-menu/tables-and-data-folder/TreeGrid/TreeGrid.vue";
// Auth
import Login from "./components/auth-folder/Login/Login.vue";
import ForgotPassword from "./components/auth-folder/ForgotPassword/ForgotPassword.vue";
import Register from "./components/auth-folder/Register/Register.vue";

import Dashboard from "./components/DashboardMain.vue";
import VueDashboardHome from "./components/VueDashboardHome.vue";
export const routes = [
  {
    path: "/",
    redirect: "/vue-simple-dashboard",
    component: Dashboard,
    children: [
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
      { path: "/alert", component: Alert },
      // Tables & Data ==========================================
      { path: "/smart-table", component: SmartTable },
      { path: "/tree-grid", component: TreeGrid },

      // UI Features Folder========================================
      { path: "/grid", component: Grid },
      { path: "/vue-simple-dashboard", component: VueDashboardHome }
    ]
  },
  // Auth =====================================================
  { path: "/auth/login", component: Login },
  { path: "/auth/forgot-password", component: ForgotPassword },
  { path: "/auth/register", component: Register }
];
