import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import BlogDetail from '../views/BlogDetail.vue'
import PushArticle from '../views/PushArticle.vue'
import Regist from '../views/Regist.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/',
    name: 'Login',
    component:Login
  }, {
    path: '/blog/detail/:blogId',
    name: 'BlogDetail',
    component: BlogDetail
  }, {
    path: '/pusharticle',
    name: 'PushArticle',
    component: PushArticle
  },
  {
    path: '/regist',
    name: 'Regist',
    component: Regist
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
