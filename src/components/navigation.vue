<template>
  <v-toolbar-items>
    <v-btn 
      v-for="item in menu.items" 
      :key="item.slug" 
      :to="item.slug" 
      :exact="(item.slug === '/') ? true : false" 
      flat 
      router 
      nuxt>{{ item.title }}</v-btn>
  </v-toolbar-items>
</template>

<script>
import menuMixin from "~/components/mixins/menu";

const primaryMenuId = "780acbda-c404-4739-b806-eedc6236e2d4";
const menu = menuMixin(primaryMenuId);

export default {
  mixins: [menu]
}
</script>
