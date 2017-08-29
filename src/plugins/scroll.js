import { vuexScrollMixin } from "vuex-scroll";

const scrollMixin = vuexScrollMixin({
  delay: 10 // Debounce delay
});

export default ({ app }) => {
  app.mixins = [scrollMixin];
};
