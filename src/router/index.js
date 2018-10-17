import Vue from 'vue'
import Tap from 'vtap'
import Router from 'vue-router'
import Main from '@/components/Main'
import Intro from '@/components/Intro'
import Pair from '@/components/Pair'
import Spin from '@/components/Spin'
import Name from '@/components/Name'
import Fishing from '@/components/Fishing'
import History from '@/components/History'
import Editor from '@/components/Editor'

Vue.use(Router)
Vue.use(Tap)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/intro',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/pair',
      name: 'Pair',
      component: Pair
    },
    {
      path: '/spin',
      name: 'Spin',
      component: Spin
    },
    {
      path: '/name',
      name: 'Name',
      component: Name
    },
    {
      path: '/fishing',
      name: 'Fishing',
      component: Fishing
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/edit',
      name: 'Editor',
      component: Editor
    }
  ]
})
