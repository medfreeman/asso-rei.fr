<template>
  <layout>
    <nuxt/>
  </layout>
</template>

<script>
import layout from "~/components/layout.vue"
export default {
  components: {layout},
  mounted: function () {
    this.$nextTick(function () {
      this.$scrollTo("main");
    })
  },
}
</script>
