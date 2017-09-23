<template>
  <article>
    <header>
      <h1>{{ page.title }}</h1>
    </header>
    <nuxtent-body :body="page.body" />
  </article>
</template>

<script>
import pageMixin from "~/components/mixins/page";
import settingsMixin from "~/components/mixins/settings";

export default {
  mixins: [pageMixin, settingsMixin],
  head () {
    return {
      title: this.page.title,
      titleTemplate: `%s | ${this.settings.site_title}`,
      meta: [
        { hid: "description", name: "description", content: this.page.description }
      ]
    }
  }
}
</script>
