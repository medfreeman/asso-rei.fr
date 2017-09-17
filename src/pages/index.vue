<template>
  <article>
    <header>
      <h1>{{ page.title }}</h1>
    </header>
    <nuxtent-body-fix :body="page.body" />
  </article>
</template>

<script>
import pageMixin from "~/components/mixins/page";
import pkg from "~~/package.json";

export default {
  layout: "landing",
  mixins: [pageMixin],
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
