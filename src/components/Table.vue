<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="heading in headings">
          {{ heading }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="playerRow in players">
        <td v-for="player in playerRow">
          <span>{{ player }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  props: ['headings', 'players']
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
