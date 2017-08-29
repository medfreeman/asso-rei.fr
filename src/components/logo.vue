<template>
  <img src="~/assets/svg/logo.svg" :class="computedClass"/>
</template>

<style module>
  .logo {
    max-width: 100%;
  }
</style>

<script>
export default {
  props: {
    logoClass: {
      type: String,
      default: ""
    }
  },
  computed: {
    computedClass: function () {
      const classArray = this.logoClass ? this.logoClass.split(" ") : [];
      classArray.push(this.$style.logo);
      return classArray;
    }
  }
}
</script>
