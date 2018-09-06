import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MallStatus from '@/components/MallStatus'
import OrderStatus from '@/components/OrderStatus'
import GoodStatus from '@/components/GoodStatus'
import FlowStatus from '@/components/FlowStatus'
import Weather from '@/components/Weather'
import Comment from '@/components/Comment'
import GoodRanking from '@/components/GoodRanking'
import Flowanalysis from '@/components/Flowanalysis'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      name: 'MallStatus',
      path: '/mallStatus',
      component: MallStatus
    },
    {
      name: 'OrderStatus',
      path: '/orderStatus',
      component: OrderStatus
    },
    {
      name: 'GoodStatus',
      path: '/goodStatus',
      component: GoodStatus
    },
    {
      name: 'FlowStatus',
      path: '/flowStatus',
      component: FlowStatus
    },
    {
      name: 'Weather',
      path: '/weather',
      component: Weather
    },
    {
      name: 'Comment',
      path: '/comment',
      component: Comment
    },
    {
      name: 'GoodRanking',
      path: '/goodRanking',
      component: GoodRanking
    },
    {
      name: 'Flowanalysis',
      path: '/flowanalysis',
      component: Flowanalysis
    }
  ]
})
