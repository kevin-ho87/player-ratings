<template>
  <div>
    <div class="container">
      <div class="col col_fw">
        <h1 class="page-title">{{ title }}</h1>
      </div>
    </div>
    <div class="container">
      <div class="col col_fw">
        <div v-if="!isLoaded && !isError" class="box">
          <p>Loading &hellip;</p>
        </div>
        <div v-if="isError" class="box box_error">
          <p>An error has occured. Please try again later.</p>
        </div>
        <Table v-if="isLoaded" :headings="headings" :players="playerRatings" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Table from '@/components/Table'

export default {
  data () {
    return {
      title: 'Overall player ratings',
      isLoaded: false,
      isError: false,
      headings: ['ranking', 'name', 'position', 'team'],
      ratings: []
    }
  },
  computed: {
    playerRatings () {
      // Create new array of objects to pass into Table component
      return this.ratings.map(item => {
        const { givenName, surname } = item.player.playerName
        return {
          ranking: item.detailedRatings[0].ranking,
          name: `${givenName} ${surname}`,
          position: item.position.toLowerCase(),
          team: item.team.teamName
        }
      })
    }
  },
  methods: {
    fetchPlayerRatings () {
      axios.get('static/ratings.json').then((response) => {
        this.ratings = response.data.playerRatings
        this.isLoaded = true
      }, () => {
        this.isError = true
      })
    }
  },
  components: {
    Table
  },
  mounted () {
    this.fetchPlayerRatings()
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/base/settings";

.box {
  border: 1px solid $medium-gray;
  padding: 1rem;

  &_error {
    border-color: $red;
    color: $red;
  }
}

</style>
