module.exports = {
  build: {
    vendor: ["vue-flex"],
    postcss: [
      require("postcss-import")(),
      require("postcss-plugin-context")({
        global: require("postcss-normalize")({
          browserslist: "last 3 versions"
        })
      }),
      require("postcss-cssnext")()
    ]
  },
  css: ["~/assets/css/main.global.css", "vue-flex/dist/vue-flex.css"],
  plugins: ["~plugins/flex"]
};
