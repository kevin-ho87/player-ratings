<template>
  <div id="app">
    <Header />

    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style src="./assets/scss/main.scss" lang="scss"></style>

<style>

</style>
