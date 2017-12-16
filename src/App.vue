<template>
  <div id="app">
    <img src="./assets/logo.png">
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

    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
