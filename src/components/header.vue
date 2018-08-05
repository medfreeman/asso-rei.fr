<template>
  <v-toolbar 
    :style="{opacity: toolbarOpacity}" 
    :class="$style.toolbar" 
    dark 
    fixed>
    <flex3c-center>
      <navigation slot="left"/>
      <nuxt-link 
        :class="$style.link" 
        to="/"><logo :logo-class="$style.logo"/></nuxt-link>
    </flex3c-center>
  </v-toolbar>
</template>

<style module>
  .toolbar {
    transition: opacity 0.2s ease-out;
  }

  .link {
    height: inherit;
    display: flex;
    flex: 1;
    align-items: center;
  }

  .logo {
    height: 70%;
  }
</style>

<script>
import { mapState } from "vuex";

import flex3cCenter from "~/components/flex-3c-center.vue";
import navigation from "~/components/navigation.vue";
import logo from "~/components/logo.vue";

export default {
  components: {flex3cCenter, navigation, logo},
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
