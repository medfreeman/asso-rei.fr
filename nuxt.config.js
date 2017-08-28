module.exports = {
  build: {
    vendor: ["framework7", "framework7-vue", "vue-flex"]
  },
  // include framework 7 css
  css: ["framework7/dist/css/framework7.css", "vue-flex/dist/vue-flex.css"],
  // include framework 7 & vue bindings on startup
  plugins: [
    { src: "~plugins/f7.js", ssr: false },
    { src: "~plugins/flex.js", ssr: false }
  ]
};
