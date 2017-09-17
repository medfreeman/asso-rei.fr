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

export default {
  mixins: [pageMixin],
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
