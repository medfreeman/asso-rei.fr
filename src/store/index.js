import Vuex from "vuex";
import { vuexScroll } from "vuex-scroll";

const createStore = () => {
  return new Vuex.Store({
    modules: { vuexScroll }
  });
};

export default createStore;
