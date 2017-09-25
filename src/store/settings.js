/* eslint-disable no-console */

export const state = () => ({
  data: {}
});

export const mutations = {
  set: function(state, settings) {
    state.data = settings;
  }
};

export const actions = {
  async get({ commit }) {
    try {
      const settings = await this.app
        .$content("/data")
        .query({ exclude: "meta" })
        .get("/settings");

      commit("set", settings.body);
    } catch (e) {
      console.log("error fetching settings");
    }
  }
};
