import router from './router'
import store from './store'

router.beforeEach((to, from, next) => {
  const token = store.getters.token
  if (!token) {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
