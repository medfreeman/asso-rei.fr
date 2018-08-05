<template>
  <v-app light>
    <s-header :animated="animated"/>
    <main :class="mainClass()">
      <v-container fluid>
        <slot/>
      </v-container>
    </main>
    <s-footer/>
  </v-app>
</template>

<style module>
  .topPadding {
    padding-top: 80px;
  }

  .noTopPadding {
    padding-top: 0 !important;
  }
</style>

<script>
import sHeader from "~/components/header.vue";
import sFooter from "~/components/footer.vue";

export default {
  components: {sHeader, sFooter},
  props: {
    animated: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    mainClass() {
      return !this.animated ? this.$style.topPadding : this.$style.noTopPadding;
    }
  }
}
</script>
