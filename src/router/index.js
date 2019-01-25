import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RoutTestFirst from '@/components/RoutTestFirst'
import Event from '@/components/Event'



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
    }
  ]
})