import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/page/home'
import form from '@/page/form'
import add1 from '@/page/add1'
import add2 from '@/page/add2'
import gps from '@/page/gps'
import scan from '@/page/scan'

Vue.use(Router)

export default new Router({
  routes: [
  //   {
  //   path: '/',
  //   name: 'HelloWorld',
  //   component: HelloWorld
  // },
    {
    path: '/',
    name: '/home',
    component: home,
    children: [{
      path: '/add1',
      component: add1,
      // meta: ['测试1', '测试001'],
    },{
      path: '/add2',
      component: add2,
      // meta: ['测试1', '测试001'],
    },{
      path: '/gps',
      component: gps,
       meta: ['home', 'gps'],
    },{
      path: '/scan',
      component: scan,
      meta: ['home', 'scan'],
    }],
  }]
})
