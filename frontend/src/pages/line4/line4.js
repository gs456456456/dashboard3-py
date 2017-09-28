import Vue from 'vue'
import line4 from './line4.vue'
import '../../assets/js/bootstrap.min.js'
import '../../assets/css/bootstrap.min.css'
import VueResource from 'vue-resource'
import $ from '../../assets/js/jquery'
import Router from '../../router/line4.js'
// import '../../assets/img/favicon.ico'
import '../../assets/css/AdminLTE.css'
import '../../assets/css/dashboard.css'
import '../../assets/css/font-awesome.min.css'
import '../../assets/css/ionicons.min.css'


Vue.config.debug = true;

Vue.use(VueResource);

new Vue({
  el: '#line4',
  template: '<line4/>',
  router: Router,
  components: { line4 }
})
