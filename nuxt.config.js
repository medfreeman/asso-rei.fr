module.exports = {
  build: {
    vendor: ["vue-flex"]
  },
  // include framework 7 css
  css: ["vue-flex/dist/vue-flex.css"],
  // include framework 7 & vue bindings on startup
  plugins: ["~plugins/flex"]
};
