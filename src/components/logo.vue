<template>
  <img 
    :class="computedClass" 
    src="~/assets/svg/logo.svg">
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
