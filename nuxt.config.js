var StyleLintPlugin = require("stylelint-webpack-plugin");

var pkg = require("./package.json");
const config = require("./.contentful.json");

module.exports = {
  srcDir: "src/",
  head: {
    title: pkg.name,
    titleTemplate: `%s | ${pkg.name}`,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      }
    ]
  },
  build: {
    extractCSS: true,
    vendor: ["contentful", "vuetify", "vue-flex", "vuex-scroll"],
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
    "~/plugins/contentful",
    "~/plugins/vuetify",
    "~/plugins/flex",
    "~/plugins/vuex-scroll",
    "~/plugins/vuex-pageScroll"
  ],
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: config.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID
  }
};
