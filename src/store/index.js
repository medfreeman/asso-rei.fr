export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch("settings/get");
    await dispatch("pages/getAll");
    await dispatch("menus/getAll");
  }
};
