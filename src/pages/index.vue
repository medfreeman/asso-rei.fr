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
  layout: "landing",
  mixins: [pageMixin, settingsMixin],
  head () {
    return {
      title: this.settings.site_title,
      titleTemplate: `%s | ${this.settings.site_subtitle}`,
      meta: [
        { hid: "description", name: "description", content: this.page.description }
      ]
    }
  }
}
</script>
