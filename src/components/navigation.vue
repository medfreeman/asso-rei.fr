<template>
  <v-toolbar-items>
    <v-btn flat v-for="item in this.menu.items" :key="item.slug" :to="item.slug" router nuxt>{{ item.title }}</v-btn>
  </v-toolbar-items>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      menu: state => (state.menus.primary || {items: []})
    })
  }
}
</script>
