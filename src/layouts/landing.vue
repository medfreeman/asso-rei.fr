<template>
  <layout animated>
    <fullpage :class="$style.container" :style="{ paddingTop: logoPadding }">
      <v-spacer></v-spacer>
      <logo :logoClass="$style.logo"/>
      <v-spacer></v-spacer>
    </fullpage>
    <nuxt/>
  </layout>
</template>

<style module>
  .container {
    transition: padding 0.1s ease-out;
  }

  .logo {
    height: 70%;
  }
</style>

<script>
import { mapState } from "vuex";

import layout from "~/components/layout.vue"
import fullpage from "~/components/fullpage.vue";
import logo from "~/components/logo.vue";

export default {
  components: {layout, fullpage, logo},
  mounted: function () {
    this.$nextTick(function () {
      this.$scrollTo("main");
    })
  },
  data () {
    return {
      logoPadding: 0
    }
  },
  computed: {
    ...mapState("pageScroll", ["progress"])
  },
  watch: {
    progress: function(progress) {
      const height = progress * 100;
      this.logoPadding = `${height}vh`;
    }
  }
}
</script>
