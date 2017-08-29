<template>
  <article>
    <header>
      <h1>{{ page.title }}</h1>
    </header>
    {{ page.body }}
  </article>
</template>

<script>
import {createClient} from "~/plugins/contentful";
const client = createClient();

export default {
  async asyncData({ env, params, error }) {
    try {
      const { items } = await client.getEntries({
        "content_type": env.CTF_PAGE_TYPE_ID,
        "fields.slug": params.slug
      });
      return {
        page: items[0].fields
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
