<template>
  <flex justify="center" :class="$style.container">
    <flex align="center" justify="center" :class="$style.box">
      <flex align="center" tag="span">
        <slot name="left"></slot>
      </flex>
    </flex>
    <flex align="center" justify="center" :class="$style.box">
      <flex align="center" tag="span">
        <slot></slot>
      </flex>
    </flex>
    <flex align="center" justify="center" :class="$style.box">
      <flex align="center" tag="span">
        <slot name="right"></slot>
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
