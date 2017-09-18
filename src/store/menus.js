/* eslint-disable no-console */

export const state = () => ({
  byId: {}
});

export const mutations = {
  set: function(state, { slug, menu }) {
    state.byId[slug] = menu;
  }
};

export const actions = {
  async getAll({ commit }) {
    try {
      const menus = await this.app
        .$content("/menus/")
        .query({ exclude: "meta" })
        .getAll();

      const pages = this.app.store.state.pages.byTitle || {};

      Object.values(menus).forEach(menu => {
        const items = [];
        Object.values(menu.items).forEach(item => {
          const page = pages[item.page];
          items.push({
            title: page.title,
            slug: page.permalink
          });
        });
        commit("set", {
          slug: menu.uuid,
          menu: {
            title: menu.title,
            items
          }
        });
      });
    } catch (e) {
      console.log("error fetching menus");
    }
  }
};
