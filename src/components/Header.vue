<template>
  <header class="site-header">
    <div class="site-header__container container">
      <div class="col col_logo">
        <a href="http://www.afl.com.au/" target="_blank" rel="noopener" class="logo"><img src="../assets/logo-afl.svg" alt="AFL"></a>
      </div>
      <div class="col">
        <!-- Navigation using Vue router -->
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
@import "../assets/scss/base/mixins";

.site-header {
  background-color: $primary-color;
  padding-top: .5rem;
  padding-bottom: .5rem;

  &__container {
    align-items: center;
  }
}

.col_logo {
  max-width: 100px;
  flex: 0 0 100px;
  @include breakpoint(tablet) {
    max-width: 140px;
    flex: 0 0 140px;
  }
}

.logo {
  display: block
}

.nav {
  &__ul {
    display: flex;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style-type: none;
  }

  &__link {
    display: block;
    font-family: 'Titillium Web', sans-serif;
    font-weight: 700;
    color: $white;
    text-decoration: none;
    padding: .5rem 1rem;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    @include breakpoint(tablet) {
      padding: 1rem 1.5rem;
      font-size: 1.2rem;
    }

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
