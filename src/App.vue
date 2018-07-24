<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  mounted(){
//    this.$store.dispatch('getTypeNames')
  },
  components: {
    FooterGuide
  }
}
</script>

<style>

</style>
