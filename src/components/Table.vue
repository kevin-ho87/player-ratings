<template>
  <div class="table-holder">
    <table class="table">
      <thead>
        <tr>
          <th v-for="heading in headings" :class="{ active: selectedSort === heading}" @click="order(heading)">
            {{ heading | capitalise }}
            <span class="arrow" :class="sortOrders[heading] ? 'arrow_asc' : 'arrow_dsc'"></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="playerRow in filteredData">
          <td v-for="player in playerRow">
            <span class="title-case">{{ player }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  props: ['headings', 'players'],
  data () {
    let sortOrders = {}

    // Set order state of each column
    this.headings.map(item => {
      sortOrders[item] = true
    })

    // selectedSort = chosen heading to sort data
    // sortOrders = contains boolean to determine if selected sort will be asc or desc
    return {
      selectedSort: '',
      sortOrders
    }
  },
  computed: {
    filteredData () {
      // Return sorted players data based on
      let sortType = this.sortOrders[this.selectedSort] ? 'asc' : 'desc'
      return _.orderBy(this.players, this.selectedSort, sortType)
    }
  },
  filters: {
    capitalise (value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  methods: {
    order (value) {
      // Update value of selected heading to sort
      this.selectedSort = value
      // Flip value of sortOrders column to determine asc or desc later
      this.sortOrders[this.selectedSort] = !this.sortOrders[this.selectedSort]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/base/settings";
@import "../assets/scss/base/mixins";

.table-holder {
  width: 100%;
  overflow-x: auto;
}

.table {
  border: 1px solid $medium-gray;
  width: 100%;
  @include breakpoint(mobileonly) {
    font-size: .8rem;
  }

  th {
    opacity: .5;
    background-color: $light-gray;
    text-align: left;
    white-space: nowrap;
    cursor: pointer;

    &.active {
      opacity: 1;
    }
  }

  th,td {
    @include breakpoint(mobileonly) {
      padding: .5rem;
    }
    @include breakpoint(tablet) {
      padding: 1rem;
    }
  }

  tr {
    &:not(:last-child) td {
      border-bottom: 1px solid $light-gray;
    }

    &:hover {
      background-color: #eee;
    }
  }
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;

  &_asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid $black;
  }

  &_dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid $black;
  }
}

</style>
