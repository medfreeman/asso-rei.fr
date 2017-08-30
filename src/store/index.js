/* eslint-disable no-console */
import { createClient } from "~/plugins/contentful";
const client = createClient();

export const state = () => ({
  menus: {}
});

export const mutations = {
  set: function(state, { slug, menu }) {
    state.menus[slug] = menu;
  }
};

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  async nuxtServerInit({ commit }) {
    try {
      const { items } = await client.getEntries({
        content_type: process.env.CTF_MENU_TYPE_ID
      });
      Object.values(items).forEach(menu => {
        const items = [];
        Object.values(menu.fields.items).forEach(item => {
          items.push({
            title: item.fields.title,
            slug: item.fields.slug,
            description: item.fields.description
          });
        });
        commit("set", {
          slug: menu.fields.slug,
          menu: {
            title: menu.fields.title,
            items
          }
        });
      });
    } catch (e) {
      console.log("error fetching menus");
    }
  }
};
