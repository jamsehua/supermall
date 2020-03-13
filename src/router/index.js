import vue from 'vue'
import vueRouter from 'vue-router'

const Home = () => import('views/home/home')
const Classify = () => import('views/classify/classify')
const Shopcar = () => import('views/shopcar/shopcar')
const Profil = () => import('views/profil/profil')
const detail = () => import('views/detail/detail')

vue.use(vueRouter)

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
    path: '/classify',
    component: Classify
  },
  {
    path: '/shopcar',
    component: Shopcar
  },
  {
    path: '/profil',
    component: Profil
  },
  {
    path: '/detail/:iid',
    component: detail
  },

]

const router = new vueRouter({
  mode: 'history',
  routes
})

export default router