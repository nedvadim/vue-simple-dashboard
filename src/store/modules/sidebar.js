import sidebarContent from "../../data/sidebar-elements-data";

const state = {
  sidebarContent: []
};

const mutations = {
  SET_SIDEBAR_CONTENT(state, sidebarContent) {
    state.sidebarContent = sidebarContent;
  }
};

const actions = {
  initSideBarContent: ({ commit }) => {
    //console.log(state.sidebarContent);
    //console.log("===");
    commit("SET_SIDEBAR_CONTENT", sidebarContent);
    //console.log(state.sidebarContent);
  }
};

const getters = {
  sidebarContent: state => {
    return state.sidebarContent;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
