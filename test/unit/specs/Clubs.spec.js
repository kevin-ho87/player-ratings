import Vue from 'vue'
import Clubs from '@/components/Clubs'

describe('Clubs.vue', () => {
  it('Render club', () => {
    const Constructor = Vue.extend(Clubs)
    const vm = new Constructor({
      data() {
        return {
          clubs: [
            {
              id: 1,
              title: 'Adelaide Crows',
              url: 'http://www.afc.com.au',
              image: 'icon-club-adel.svg'
            }
          ]
        }
      },
    }).$mount()
    expect(vm.$el.querySelector('.club-cta img').title)
    .toEqual('Adelaide Crows')
  })

})