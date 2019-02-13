import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RoutTestFirst from '@/components/RoutTestFirst'
import Event from '@/components/Event'
import Tree from '@/components/Tree'
import TestTree from '@/components/TestTree'





Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/first',
      name: 'RoutTestFirst',
      component: RoutTestFirst
    },
    {
      path: '/event',
      name: 'Event',
      component: Event
    },
    {
      path: '/tree',
      name: 'tree',
      component: Tree
    }, {
      path: '/testTree',
      name: 'TestTree',
      component: TestTree
    }
  ]
})