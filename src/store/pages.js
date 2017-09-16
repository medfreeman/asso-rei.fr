/* eslint-disable no-console */

export const state = () => ({
  bySlug: {},
  byTitle: {}
});

export const mutations = {
  set: function(state, page) {
    state.bySlug[page.permalink] = page;
    state.byTitle[page.title] = page;
  }
};

export const actions = {
  async getAll({ commit }) {
    try {
      const pages = await this.app
        .$content("/pages/")
        .query({ exclude: "meta" })
        .getAll();

      pages.forEach(page => {
        commit("set", page);
      });
    } catch (e) {
      console.log("error fetching pages");
    }
  }
};
