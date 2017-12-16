<template>
  <div class="container">
    <div class="col col_fw">
      <h1 class="page-title">{{ title }}</h1>

      <Table :headings="headings" :players="playerRatings" />
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
      }, (error) => {
        console.log(error)
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

</style>
