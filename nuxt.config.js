var StyleLintPlugin = require("stylelint-webpack-plugin");

var pkg = require("./package.json");

module.exports = {
  srcDir: "src/",
  head: {
    link: [
      {
        rel: "stylesheet",
        href:
          "//fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      }
    ]
  },
  manifest: {
    lang: "fr"
  },
  build: {
    extractCSS: true,
    vendor: ["vuetify", "vue-flex/dist/vue-flex.common.js", "vuex-scroll"],
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
    postcss: [require("postcss-cssnext")(), require("postcss-reporter")()]
  },
  css: ["~/assets/style/app.styl", "vue-flex/dist/vue-flex.css"],
  plugins: [
    "~/plugins/nuxtent-body-fix",
    "~/plugins/vuetify",
    "~/plugins/flex",
    "~/plugins/vuex-scroll",
    "~/plugins/vuex-pageScroll"
  ],
  modules: [
    "nuxt-netlify-cms",
    "nuxtent",
    "@nuxtjs/font-awesome",
    "@nuxtjs/meta",
    "@nuxtjs/manifest",
    "@nuxtjs/icon"
  ]
};
