<template>
  <flex align="center" justify="center" :class="$style.container">
    <slot></slot>
  </flex>
</template>

<script>
export default {}
</script>

<style module>
  .container {
    min-width: 100%;
    height: 100vh;
    margin-bottom: 30px;
  }
</style>
