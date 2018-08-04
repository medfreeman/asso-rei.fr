<template>
  <layout>
    <nuxt/>
  </layout>
</template>

<script>
import layout from "~/components/layout.vue"
export default {
  components: {layout},
  beforeMount() {
    window.scrollTo(window.scrollX, 0);
  },
}
</script>
