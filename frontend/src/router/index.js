import Vue from 'vue'
import VueRouter from "vue-router";
import mainpage from '../components/mainpage'
import login from '../components/login'
import personalist from '../components/personalist'
import linecom4 from '../components/linecom4'
import line7 from '../components/line7'
import linecom7 from '../components/linecom7'
import detail from '../pages/detail/detail.vue'
import store from '../store/store.js'
import line4 from '../pages/line4/line4.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'mainpage',
      component: mainpage
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/personalist',
      name:'personalist',
      component:personalist,
       meta: {
          requireAuth: true
      }
    },
    {
      path:'/detail',
      name:'detail',
      component:detail,
    },
    {
      path:'/line4',
      name:'line4',
      component:line4,
      meta: {
          requireAuth: true
      }
    },
      {
      path:'/linecom4',
      name:'linecom4',
      component:linecom4,
      meta: {
          requireAuth: true
      }
    },
          {
      path:'/line7',
      name:'line7',
      component:line7,
      meta: {
          requireAuth: true
      }
    },
          {
      path:'/linecom7',
      name:'linecom7',
      component:linecom7,
      meta: {
          requireAuth: true
      }
    },

  ]

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
    store.commit(types.LOGIN, window.localStorage.getItem('token'))
}

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (store.state.token) {
            next();
        }
        else {
            next({
                path: '/',
                query: {redirect: to.fullPath}
            })
        }
    }
    else {
        next();
    }
})

export default router;

