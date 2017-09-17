import Vue from "vue";

Vue.component("nuxtent-body-fix", {
  render: function(h) {
    if (this.isObject(this.body)) {
      return h("nuxtent-body", {
        props: {
          body: this.body
        }
      });
    } else {
      return h("div", {
        domProps: {
          innerHTML: this.body
        }
      });
    }
  },
  methods: {
    isObject(body) {
      return typeof body === "object";
    }
  },
  props: {
    body: {
      type: [Object, String]
    }
  }
});
