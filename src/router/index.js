import Vue from 'vue'
import Router from 'vue-router'
import PlayerRatings from '@/components/PlayerRatings'
import Clubs from '@/components/Clubs'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PlayerRatings',
      component: PlayerRatings
    },
    {
      path: '/clubs',
      name: 'Clubs',
      component: Clubs
    }
  ]
})
