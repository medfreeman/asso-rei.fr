/* eslint-disable no-console */
import { mapState } from "vuex";

const settingsMixin = {
  mounted() {
    if (!this.$store) throw new Error("This mixin requires a Vuex store");
  },
  computed: {
    ...mapState({
      settings: state => state.settings.data || {}
    })
  }
};

export default settingsMixin;
