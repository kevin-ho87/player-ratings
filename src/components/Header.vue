<template>
  <header class="site-header">
    <a href="http://www.afl.com.au/" target="_blank" rel="noopener" class="logo"><img src="../assets/logo-afl.svg" width="120" height="auto" alt="AFL"></a>
    <nav class="nav">
      <ul class="nav__ul">
        <li>
          <router-link :to="'/'">Player ratings</router-link>
        </li>
        <li>
          <router-link :to="'clubs'">Clubs</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  // name: 'Header'
}
</script>

<style lang="scss" scoped>
  .site-header {
    background-color: #eee;
  }

  .nav {
    &__ul {
      padding-left: 0;
      list-style-type: none;
    }
  }
</style>
