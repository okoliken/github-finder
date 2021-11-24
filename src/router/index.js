import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GitUserDetails from '../views/gitusers/GitUserDetails.vue'
import About from '../views/About.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/userdetails/:id',
    name: 'GitUserDetails',
    component: GitUserDetails,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
