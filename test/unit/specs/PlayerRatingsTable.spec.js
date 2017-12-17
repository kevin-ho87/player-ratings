import Vue from 'vue'
import PlayerRatings from '@/components/PlayerRatings'

describe('PlayerRatings.vue', () => {
  let $mounted

  beforeEach(() => {
    const Constructor = Vue.extend(PlayerRatings)
    $mounted = new Constructor({
      data() {
        return {
          isLoaded: true,
          ratings: [
            {
              "position": "MIDFIELDER",
              "player": {
                "playerName": {
                  "givenName": "Patrick",
                  "surname": "Dangerfield"
                }
              },
              "team": {
                "teamName": "Geelong Cats"
              },
              "detailedRatings": [
                {
                  "ranking": 1,
                  "ratingType": "OVERALL"
                }
              ]
            },
            {
              "position": "MIDFIELDER/FORWARD",
              "player": {
                "playerName": {
                  "givenName": "Robbie",
                  "surname": "Gray"
                }
              },
              "team": {
                "teamName": "Port Adelaide"
              },
              "detailedRatings": [
                {
                  "ranking": 2,
                  "ratingType": "OVERALL"
                }
              ]
            }
          ]
        }
      },
    }).$mount()
  })

  it('Render table content', () => {
    expect($mounted.$el.querySelector('.table .title-case').innerHTML).toContain('1')
  })
})