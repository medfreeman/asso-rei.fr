var StyleLintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  srcDir: "src/",
  build: {
    vendor: ["vue-flex"],
    extend(config, { isClient }) {
      if (isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
          options: {
            formatter: require("eslint-friendly-formatter")
          }
        });
      }
    },
    plugins: [
      new StyleLintPlugin({
        files: ["src/**/*.css", "src/**/*.vue"]
      })
    ],
    postcss: [
      require("postcss-import")(),
      require("postcss-plugin-context")({
        global: require("postcss-normalize")({
          browserslist: "last 3 versions"
        })
      }),
      require("postcss-cssnext")(),
      require("postcss-reporter")()
    ]
  },
  css: ["~/assets/css/main.global.css", "vue-flex/dist/vue-flex.css"],
  plugins: ["~plugins/flex"]
};
