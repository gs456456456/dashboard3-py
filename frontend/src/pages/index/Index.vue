<template>
  <div id="index">
<!--   <mainpage></mainpage> -->
  <router-view></router-view>
  </div>
</template>

<script>
import mainpage from '../../components/mainpage.vue'
import login from '../../components/login.vue'
import personalist from '../../components/personalist.vue'
import line4 from '../../components/line4.vue'
import linecom4 from '../../components/linecom4.vue'
import line7 from '../../components/line7.vue'
import linecom7 from '../../components/linecom7.vue'

export default {
  name: 'index',
  components: { login,personalist,mainpage,line4,linecom4,line7,linecom7 },
}
</script>

