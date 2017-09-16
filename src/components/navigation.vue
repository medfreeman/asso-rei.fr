<template>
  <v-toolbar-items>
    <v-btn flat v-for="item in menu.items" :key="item.slug" :to="item.slug" router nuxt>{{ item.title }}</v-btn>
  </v-toolbar-items>
</template>

<script>
import { mapState } from "vuex";

const primaryMenuId = "780acbda-c404-4739-b806-eedc6236e2d4";

export default {
  computed: {
    ...mapState({
      menu: state => (state.menus.byId[primaryMenuId] || {items: []})
    })
  }
}
</script>
