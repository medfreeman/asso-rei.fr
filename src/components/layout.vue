<template>
  <v-app light>
    <v-toolbar dark fixed :style="{opacity: toolbarOpacity}" :class="$style.toolbar">
      <v-spacer></v-spacer>
      <logo :logoClass="$style.logo"/>
      <v-spacer></v-spacer>
    </v-toolbar>
    <main :class="mainClass()">
      <v-container fluid>
        <slot></slot>
      </v-container>
    </main>
    <s-footer/>
  </v-app>
</template>

<style module>
  .toolbar {
    transition: opacity 0.2s ease-out;
  }

  .logo {
    height: 70%;
  }

  .noTopPadding {
    padding-top: 0 !important;
  }
</style>

<script>
import { mapState } from "vuex";

import logo from "~/components/logo.vue";
import sFooter from "~/components/footer.vue";

export default {
  components: {logo, sFooter},
  props: {
    animated: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      containerPadding: 0,
      toolbarOpacity: !this.animated ? 1 : 0
    }
  },
  methods: {
    mainClass() {
      return !this.animated ? "" : this.$style.noTopPadding;
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
