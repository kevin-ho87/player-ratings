<template>
  <header class="site-header">
    <div class="site-header__container container">
      <div class="col">
        <a href="http://www.afl.com.au/" target="_blank" rel="noopener" class="logo"><img src="../assets/logo-afl.svg" width="120" height="auto" alt="AFL"></a>
      </div>
      <div class="col">
        <nav class="nav">
          <ul class="nav__ul">
            <li class="nav__li">
              <router-link :to="'/'" class="nav__link">Player ratings</router-link>
            </li>
            <li class="nav__li">
              <router-link :to="'clubs'" class="nav__link">Clubs</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/base/settings";

  .site-header {
    background-color: $primary-color;
    padding-top: .5rem;
    padding-bottom: .5rem;

    &__container {
      align-items: center;
    }
  }

  .nav {
    &__ul {
      display: flex;
      margin-top: 0;
      margin-bottom: 0;
      padding-left: 0;
      list-style-type: none;
    }

    &__li {

    }

    &__link {
      display: block;
      font-size: 1.2rem;
      padding: 1rem 1.5rem;
      color: $white;
      text-decoration: none;
      font-weight: 700;
      border-top: 4px solid transparent;
      border-bottom: 4px solid transparent;

      &:hover {
        border-bottom-color: $white;
      }
    }

    .router-link-exact-active {
      background-color: $white;
      color: $primary-color;
    }
  }
</style>
