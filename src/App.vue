<template>
  <div id="app">
    <Header />
    <main>
      <router-view/>
    </main>
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
