<template>
  <v-toolbar dark fixed :style="{opacity: toolbarOpacity}" :class="$style.toolbar">
    <v-spacer></v-spacer>
    <logo :logoClass="$style.logo"/>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<style module>
  .toolbar {
    transition: opacity 0.2s ease-out;
  }

  .logo {
    height: 70%;
  }
</style>

<script>
import { mapState } from "vuex";

import logo from "~/components/logo.vue";

export default {
  components: {logo},
  props: {
    animated: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      toolbarOpacity: !this.animated ? 1 : 0
    }
  },
  computed: {
    ...mapState("pageScroll", ["progress"])
  },
  watch: {
    progress: function(progress) {
      this.toolbarOpacity = !this.animated || (progress >= 0.9) ? 1 : 0;
    }
  }
}
</script>
