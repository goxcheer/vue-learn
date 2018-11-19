import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Home from '@/components/home/Home'
import Article from '@/components/home/article/Article'
import Category from '@/components/home/category/Category'
import Comment from '@/components/home/comment/Comment'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'home',
      component:Home,
      children:[
        {path:'/home/article',component:Article,name:'article'},
        {path:'/home/category',component:Category,name:'article'},
        {path:'/home/comment',component:Comment,name:'comment'}
      ]
    }
  ]
})
