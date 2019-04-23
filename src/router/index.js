import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/views/Movie'
import Menu from '@/views/Menu'
import Details from '@/views/Details'
import Test from '@/views/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
