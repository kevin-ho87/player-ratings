<template>
  <header>
    <a href="http://www.afl.com.au/" target="_blank" rel="noopener" class="logo"><img src="../assets/logo-afl.svg" width="120" height="auto" alt="AFL"></a>
    <nav>
      <ul>
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

<style scoped>
  header {
    background-color: #eee;
  }
</style>
