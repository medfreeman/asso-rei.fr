<template>
  <article>
    <header>
      <h1>{{ page.title }}</h1>
    </header>
    <nuxtent-body-fix :body="page.body" />
  </article>
</template>

<script>
export default {
  asyncData ({ store, route, error }) {
    try {
      return {
        page: store.state.pages.bySlug[route.path]
      }
    } catch(e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  head () {
    return {
      title: this.page.title,
      meta: [
        { hid: "description", name: "description", content: this.page.description }
      ]
    }
  }
}
</script>
