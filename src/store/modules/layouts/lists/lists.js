import list2Content from "../../../../data/layoutsData/lists/list2";

const state = {
  list2Content: {}
};

const mutations = {
  SET_LIST_TWO_CONTENT(state, list2Content) {
    state.list2Content = list2Content;
  }
};
const actions = {
  initListTwoContent: ({ commit }) => {
    commit("SET_LIST_TWO_CONTENT", list2Content);
  }
};
const getters = {
  list2Content: state => {
    return state.list2Content;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
