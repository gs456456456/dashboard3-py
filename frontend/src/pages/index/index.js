import Vue from 'vue'
import index from './Index.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
import Router from '../../router/index.js'
import $ from '../../assets/js/jquery'
import '../../assets/js/jquery.backstretch.min.js'
import '../../assets/css/bootstrap.css'
import '../../assets/js/bootstrap.min.js'
import store from '../../store/store.js'



/////
import '../../assets/css/AdminLTE.css'
import '../../assets/css/dashboard.css'
import '../../assets/css/font-awesome.min.css'
import '../../assets/css/ionicons.min.css'
import '../../assets/css/button.css'


////???
//Vue.prototype.$echarts = echarts
//
//变为原型
//Vue.prototype.$ax= axios;

//开启debug模式
Vue.config.debug = true;

Vue.use(VueResource);

new Vue({
  el: '#app',
  template: '<index/>',
  router: Router,
  components: { index }
})

/////
//var proxyMiddleware = require('http-proxy-middleware')
////拦截一切/api的请求，后台代理获取数据，返回到前端
//var proxyTable = {
//      '/api': {
//        target: 'http://open.energymost.com/GetRealTimeData',
//        changeOrigin: true,
//        pathRewrite: {
//          '^/api': ''
//        }
//      }
//    };
//Object.keys(proxyTable).forEach(function (context) {
//  var options = proxyTable[context]
//  if (typeof options === 'string') {
//    options = { target: options }
//  }
//  Vue.use(proxyMiddleware(context, options))
//})












// 定义组件, 也可以像教程之前教的方法从别的文件引入


// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。

//import Vue from 'vue'
//import index from './Index'
//
//Vue.config.productionTip = false
//
///* eslint-disable no-new */
//new Vue({
//  el: '#app',
//  template: '<index/>',
//  components: { index }
//})
