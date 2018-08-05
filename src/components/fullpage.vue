<template>
  <flex 
    :class="$style.container" 
    align="center" 
    justify="center">
    <slot/>
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
