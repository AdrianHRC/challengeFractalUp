import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  { path: '/', component: Home },
  { path: '/vista1', component: Vista1 },
  { path: '/vista2', component: Vista2 },
]
const router = new VueRouter({
  routes,
})
export default router