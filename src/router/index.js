import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Write from '@/components/Write'
import Member from '@/components/Member'
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
      path: '/write',
      name: 'write',
      component: Write
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/markdown',
      name: 'markdown',
      component: Markdown
    }
  ]
})
