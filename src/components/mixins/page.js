/* eslint-disable no-console */

const emptyPage = {
  page: {
    title: "",
    body: "",
    description: ""
  }
};

const pageMixin = {
  mounted() {
    if (!this.$store) throw new Error("This mixin requires a Vuex store");
  },
  data() {
    return emptyPage;
  },
  asyncData({ store, route, error }) {
    try {
      return {
        page: store.state.pages.bySlug[route.path] || emptyPage
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};

export default pageMixin;
