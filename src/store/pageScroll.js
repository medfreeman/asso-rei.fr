export const state = () => ({
  progress: 0
});

export const mutations = {
  update(state, { progress }) {
    state.progress = progress;
  }
};
