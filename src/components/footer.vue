<template>
  <v-footer>
    <v-spacer/>
    <span>&copy; {{year}}</span>
    <v-spacer/>
  </v-footer>
</template>

<script>
export default {
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
