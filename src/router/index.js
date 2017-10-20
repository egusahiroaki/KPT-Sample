import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import User from '@/components/User'
import Markdown from '@/components/Markdown'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/markdown',
      name: 'markdown',
      component: Markdown
    }
  ]
})
