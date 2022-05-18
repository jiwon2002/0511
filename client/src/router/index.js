import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Join from "../views/Join.vue"
import BoardList from "../views/board/list.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/join",
    component: () => import('../views/Join.vue')
  },
  {
    path: "/board",
    component: BoardList
  }

]

const router = new VueRouter({
  routes
})

export default router
