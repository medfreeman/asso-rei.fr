/* eslint-disable no-console */
import { mapState } from "vuex";

const emptyMenu = {
  menu: {
    items: []
  }
};

const menuMixin = function(id) {
  return {
    mounted() {
      if (!this.$store) throw new Error("This mixin requires a Vuex store");
    },
    computed: {
      ...mapState({
        menu: state => state.menus.byId[id] || emptyMenu
      })
    }
  };
};

export default menuMixin;
