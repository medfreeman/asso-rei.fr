<template>
  <article>
    <header>
      <h1>{{ page.title }}</h1>
    </header>
    <nuxtent-body-fix :body="page.body" />
  </article>
</template>

<script>
import pkg from "~~/package.json";

export default {
  layout: "landing",
  async asyncData ({ app, payload, error }) {
    try {
      return {
        page: payload || await app.$content('/pages/').get("index")
      }
    } catch(e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  head () {
    return {
      title: pkg.name,
      titleTemplate: `%s | ${pkg.description}`,
      meta: [
        { hid: "description", name: "description", content: this.page.description }
      ]
    }
  }
}
</script>
