<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="heading in headings">
          {{ heading | capitalise }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="playerRow in players">
        <td v-for="player in playerRow">
          <span class="title-case">{{ player }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  props: ['headings', 'players'],
  filters: {
    capitalise (value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/base/settings";

.table {
  border: 1px solid $medium-gray;
  width: 100%;

  th {
    background-color: $light-gray;
    text-align: left;
  }

  th,td {
    padding: 1rem;
  }

  tr {
    &:not(:last-child) td {
      border-bottom: 1px solid $light-gray;
    }

    &:hover {
      background-color: #eee;
    }
  }

  &__ranking {
    // width: 90px;
    // text-align: center;
  }
}

</style>
