import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Editor from '@/components/Editor'
import Fishing from '@/components/Fishing'
import Name from '@/components/Name'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/edit',
      name: 'Editor',
      component: Editor
    },
    {
      path: '/fishing',
      name: 'Fishing',
      component: Fishing
    },
    {
      path: '/name',
      name: 'Name',
      component: Name
    }
  ]
})
