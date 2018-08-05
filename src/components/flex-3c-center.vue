<template>
  <flex 
    :class="$style.container" 
    justify="center">
    <flex 
      :class="$style.box" 
      align="center" 
      justify="center">
      <flex 
        align="center" 
        tag="span">
        <slot name="left"/>
      </flex>
    </flex>
    <flex 
      :class="$style.box" 
      align="center" 
      justify="center">
      <flex 
        align="center" 
        tag="span">
        <slot/>
      </flex>
    </flex>
    <flex 
      :class="$style.box" 
      align="center" 
      justify="center">
      <flex 
        align="center" 
        tag="span">
        <slot name="right"/>
      </flex>
    </flex>
  </flex>
</template>

<style module>
  .container,
  .box,
  .box > span {
    height: inherit;
  }

  .container {
    width: 100%;
  }

  .box {
    flex: 1;
  }

  .box:first-child > span { margin-right: auto; }

  .box:last-child > span { margin-left: auto; }
</style>

<script>
export default {}
</script>
