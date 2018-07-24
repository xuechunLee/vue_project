import Vue from 'vue'
import VueRouter from 'vue-router'


import FirstView from '../pages/FirstView/FirstView.vue'
import Topic from '../pages/Topic/Topic.vue'
import Msite from '../pages/Msite/Msite.vue'
import Item from '../pages/Item/Item.vue'
import Cart from '../pages/Cart/Cart.vue'
import Personal from '../pages/Personal/Personal.vue'
import Login from '../pages/Login/Login.vue'


Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/firstView',
      component:FirstView
    },
    {
      path:'/msite',
      component:Msite,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/topic',
      component:Topic,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/item',
      component:Item,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/cart',
      component:Cart,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/personal',
      component:Personal,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/',
      redirect:'/firstView',
    },
  ]
})
