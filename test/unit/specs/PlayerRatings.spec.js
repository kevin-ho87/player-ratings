import Vue from 'vue'
import PlayerRatings from '@/components/PlayerRatings'

describe('PlayerRatings.vue', () => {
  let $mounted

  beforeEach(() => {
    const Constructor = Vue.extend(PlayerRatings)
    $mounted = new Constructor().$mount()
  })

  it('should render correct contents', () => {
    expect($mounted.$el.querySelector('.page-title').textContent)
    .toEqual('Overall player ratings')
  })

  it('should render loading box', () => {
    expect($mounted.$el.querySelector('.box p').textContent)
    .toEqual('Loading …')
  })

  it('should render error box', () => {
    const Constructor = Vue.extend(PlayerRatings)
    const vm = new Constructor({
      data() {
        return {
          isError: true
        }
      },
    }).$mount()
    expect(vm.$el.querySelector('.box_error p').textContent)
    .toEqual('An error has occured. Please try again later.')
  })

})