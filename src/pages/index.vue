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
  asyncData ({ store, error }) {
    try {
      return {
        page: store.state.pages.bySlug["/index"]
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
