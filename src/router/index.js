/*
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-07-31 08:53:45
 * @LastEditors: slimmerYu
 * @LastEditTime: 2020-08-06 22:01:27
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')


Vue.use(VueRouter)

  const routes = [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/detail/:iid',
      component: Detail
    }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
