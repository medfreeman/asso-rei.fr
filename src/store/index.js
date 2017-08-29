import Vuex from "vuex";
import { vuexScroll } from "vuex-scroll";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      vuexScroll,
      pageScroll: {
        namespaced: true,
        state: {
          progress: 0
        },
        mutations: {
          update(state, { progress }) {
            state.progress = progress;
          }
        }
      }
    }
  });
};

export default createStore;
