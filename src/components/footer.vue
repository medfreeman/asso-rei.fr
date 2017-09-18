<template>
  <v-footer>
    <v-spacer/>
    <nuxtent-body-fix :body="settings.footer_content" />
    <v-spacer/>
  </v-footer>
</template>

<script>
import settingsMixin from "~/components/mixins/settings";

export default {
  mixins: [settingsMixin]
}
</script>
