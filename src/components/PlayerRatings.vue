<template>
  <div class="container">
    <div class="col col_fw">
      <h1 class="page-title">{{ title }}</h1>
      <table class="table">
        <thead>
          <tr>
            <th class="table__ranking">Ranking</th>
            <th>Player</th>
            <th>Team</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="table__ranking">
              <span>1</span>
            </td>
            <td>
              <span>Patrick Dangerfield</span>
            </td>
            <td>
              <span>Geelong Cats</span>
            </td>
            <td>
              <span>MIDFIELDER</span>
            </td>
          </tr>
          <tr>
            <td class="table__ranking">
              <span>2</span>
            </td>
            <td>
              <span>Patrick Dangerfield</span>
            </td>
            <td>
              <span>Geelong Cats</span>
            </td>
            <td>
              <span>MIDFIELDER</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'HelloWorld',
  data () {
    return {
      title: 'Overall player ratings'
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
    width: 90px;
    text-align: center;
  }
}

</style>
