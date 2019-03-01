import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RoutTestFirst from '@/components/RoutTestFirst'
import Event from '@/components/Event'
import Tree from '@/components/Tree'
import TestTree from '@/components/TestTree'
import RouterT from '@/components/RouterT'






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
    },
    {
      path: '/routerT',
      name: 'RouterT',
      component: RouterT,
      props: (route) => ({ query: route.query.q }), //将{query：''}这个对象作为属性传入到组件中
      // props: true,//将/routerT/:query  query作为属性传入到组件中
    }
    //RouterT
  ]
})