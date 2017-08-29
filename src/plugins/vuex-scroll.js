import { vuexScrollMixin } from "vuex-scroll";

const scrollMixin = vuexScrollMixin({
  delay: 0 // Debounce delay
});

export default ({ app }) => {
  app.mixins = app.mixins ? [...app.mixins, scrollMixin] : [scrollMixin];
};
