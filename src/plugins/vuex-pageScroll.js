import { mapState } from "vuex";

const pageScrollMixin = {
  mounted() {
    if (!this.$store) throw new Error("This plugin requires a Vuex store");
  },
  computed: {
    ...mapState("vuexScroll", ["progress"])
  },
  watch: {
    progress: function(progress) {
      const scrollProgress = Math.min(progress / document.body.clientHeight, 1);
      this.$store.commit("pageScroll/update", scrollProgress);
    }
  }
};

export default ({ app }) => {
  app.mixins = app.mixins
    ? [...app.mixins, pageScrollMixin]
    : [pageScrollMixin];
};
