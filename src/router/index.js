import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Todos'
import Todo from '@/views/Todo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component:Home,
    name:'home'
  },
  {
    path:'todo-:id',
    name:'todo',
    component:Todo,
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
