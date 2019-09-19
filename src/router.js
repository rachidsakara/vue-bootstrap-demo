import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AuthorList from './views/AuthorList.vue'
import NewAuthor from './views/NewAuthor.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/authors',
      name: 'author-list',
      component: AuthorList,
    },
    {
      path: '/new',
      name: 'new-author',
      component: NewAuthor,
    }
  ]
})
