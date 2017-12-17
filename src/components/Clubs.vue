<template>
  <div>
    <div class="container">
      <div class="col col_fw">
        <h1 class="page-title">{{ title }}</h1>
      </div>
    </div>
    <div class="container">
      <!-- Club images data gets looped through and printed out -->
      <div class="col col_club-logo" v-for="club in clubs" :key="club.id">
        <Club :url="club.url" :image="club.image" :title="club.title" />
      </div>
    </div>
  </div>
</template>

<script>
import Club from '@/components/Club'

export default {
  data () {
    return {
      title: 'Clubs',
      clubs: [
        {
          id: 1,
          title: 'Adelaide Crows',
          url: 'http://www.afc.com.au',
          image: 'icon-club-adel.svg'
        },
        {
          id: 2,
          title: 'Brisbane Lions',
          url: 'http://www.lions.com.au',
          image: 'icon-club-bl.svg'
        },
        {
          id: 3,
          title: 'Carlton',
          url: 'http://www.carltonfc.com.au',
          image: 'icon-club-carl.svg'
        },
        {
          id: 4,
          title: 'Collingwood',
          url: 'http://www.collingwoodfc.com.au',
          image: 'icon-club-coll.svg'
        },
        {
          id: 5,
          title: 'Fremantle',
          url: 'http://www.fremantlefc.com.au',
          image: 'icon-club-fre.svg'
        },
        {
          id: 6,
          title: 'Gold Coast Suns',
          url: 'http://www.goldcoastfc.com.au',
          image: 'icon-club-gcfc.svg'
        },
        {
          id: 7,
          title: 'Geelong Cats',
          url: 'http://www.geelongcats.com.au',
          image: 'icon-club-geel.svg'
        },
        {
          id: 8,
          title: 'GWS Giants',
          url: 'http://www.gwsgiants.com.au',
          image: 'icon-club-gws.svg'
        },
        {
          id: 9,
          title: 'Hawthorn',
          url: 'http://www.hawthornfc.com.au',
          image: 'icon-club-haw.svg'
        },
        {
          id: 10,
          title: 'Melbourne',
          url: 'http://www.melbournefc.com.au',
          image: 'icon-club-melb.svg'
        },
        {
          id: 11,
          title: 'North Melbourne',
          url: 'http://www.nmfc.com.au',
          image: 'icon-club-nmfc.svg'
        },
        {
          id: 12,
          title: 'Port Adelaide',
          url: 'http://www.portadelaidefc.com.au',
          image: 'icon-club-port.svg'
        },
        {
          id: 13,
          title: 'Richmond',
          url: 'http://www.richmondfc.com.au',
          image: 'icon-club-rich.svg'
        },
        {
          id: 14,
          title: 'St Kilda',
          url: 'http://www.saints.com.au',
          image: 'icon-club-stk.svg'
        },
        {
          id: 15,
          title: 'Sydney Swans',
          url: 'http://www.sydneyswans.com.au',
          image: 'icon-club-syd.svg'
        },
        {
          id: 16,
          title: 'Western Bulldogs',
          url: 'http://www.westernbulldogs.com.au',
          image: 'icon-club-wb.svg'
        },
        {
          id: 17,
          title: 'West Coast Eagles',
          url: 'http://www.westcoasteagles.com.au',
          image: 'icon-club-wce.svg'
        }
      ]
    }
  },
  components: {
    Club
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/base/settings";
@import "../assets/scss/base/mixins";

.col_club-logo {
  display: flex;
  @include breakpoint(mobileonly) {
    max-width: 33%;
    flex: 0 0 33%;
  }
  @include breakpoint(tablet) {
    max-width: 25%;
    flex: 0 0 25%;
  }
  @include breakpoint(desktop) {
    max-width: 15%;
    flex: 0 0 15%;
  }
}

</style>
