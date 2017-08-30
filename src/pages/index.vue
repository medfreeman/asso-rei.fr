<template>
  <article>
    <header>
      <h1>{{ page.title }}</h1>
    </header>
    <vue-markdown>{{ page.body }}</vue-markdown>
  </article>
</template>

<script>
import VueMarkdown from "vue-markdown";

import pkg from "~~/package.json";

import {createClient} from "~/plugins/contentful";
const client = createClient();

export default {
  components: {
    VueMarkdown
  },
  layout: "landing",
  async asyncData({ env, error }) {
    try {
      const { items } = await client.getEntries({
        "content_type": env.CTF_PAGE_TYPE_ID,
        "fields.slug": "accueil"
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
      title: pkg.name,
      titleTemplate: `%s | ${pkg.description}`,
      meta: [
        { hid: "description", name: "description", content: this.page.description }
      ]
    }
  }
}
</script>
