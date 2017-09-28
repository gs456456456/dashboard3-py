import Vue from 'vue'
import detail from './detail.vue'
import VueResource from 'vue-resource'
import $ from '../../assets/js/jquery'
import VueRouter from "vue-router";
//import VueResource from 'vue-resource'
import Router from '../../router/index.js'
//import '../../assets/bootstrap/js/bootstrap.min.js'
//import '../../assets/jquery.backstretch.min.js'
//import '../../assets/bootstrap/css/bootstrap.min.css'

//开启debug模式
Vue.config.debug = true;

Vue.use(VueResource);

new Vue({
  el: '#app',
  router:Router,
  template: '<detail/>',
  components: { detail }
})
