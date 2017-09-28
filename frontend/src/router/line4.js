/**
 * Created by liukun on 17/9/26.
 */
import Vue from 'vue'
import VueRouter from "vue-router";
import store from '../store/store.js'
//import line4 from '../pages/line4/line4.vue'
Vue.use(VueRouter)

const routes = [
    {
      path:'/line4',
      name:'line4',
      component:line4,
      //meta: {
      //    requireAuth: true
      //}
    }
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
