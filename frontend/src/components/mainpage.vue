<template>
  <div id="mainpage">
      <div class="top-content">
            <div class="inner-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-2 text">
                            <h1><strong>用户登录</strong></h1>
                            <div class="description">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-sm-offset-3 form-box">
                        	<div class="form-top">
                        		<div class="form-top-left">
                            		<p>Enter your username and password to log on:</p>
                        		</div>
                        		<div class="form-top-right">
                        			<i class="fa fa-key"></i>
                        		</div>
                            </div>
                            <div class="form-bottom">
<!-- 			                    <form role="form" action="" method="post" class="login-form"> -->
<!--                             <meta name="csrf-token" content="{{ csrf_token() }}"> -->
			                    	<div class="form-group">
			                    		<label class="sr-only" for="form-username">Username</label>
			                        	<input type="text" name="form-username" placeholder="Username..." class="form-username form-control" id="form-username" v-model="user.username">
			                        </div>
			                        <div class="form-group">
			                        	<label class="sr-only" for="form-password">Password</label>
			                        	<input type="password" name="form-password" placeholder="Password..." class="form-password form-control" id="form-password" v-model="user.password">
			                        </div>
			                        <button type="submit" class="btn" @click="login">Sign in!</button>
<!-- 			                    </form> -->
		                    </div>
                        </div>
                    </div>
                </div>
                <div id='error' class="disappear"></br>{{errorTxt}}</div>
            </div>
        </div>
      </div>
</template>

<style type="text/css">
.disappear{
  display: none;
}
#mainpage {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<script>
import store from '../store/store.js'
//--save-dev
export default {
  name: 'mainpage',

  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      showTip: false,
      errorTxt: ''
    }
  },

  computed: {
    validation () {
      return {
        name: !!this.user.username.trim(),
        password: !!this.user.password.trim()
      }
    },
    isValid () {
      let validation = this.validation
      return Object.keys(validation).every((key) => {
        return validation[key]
      })
    }
  },


  methods: {
    login () {
      let self = this
      if (this.isValid){

   //      $.ajaxSetup({
   //      data: {csrfmiddlewaretoken: '{{ csrf_token }}' },
   // });
        //      $.ajaxSetup({
        //        headers : {
        //     'CSRFToken' : getCSRFTokenValue()
        // }
        //  });
         $.post('http://127.0.0.1:8000/confirmapi/',{
            'username':this.user.username,
            'password':this.user.password,
            },function(data){
              if (data){
                console.log(data)
                var json_obj = JSON.parse(data)
                console.log(json_obj)
                if (json_obj['status'] === '1'){
                    console.log('success')
                    var token = json_obj['token']
                    store.state.token = token
                    store.state.line = json_obj['line']
                    window.location.href = '/#/personalist'
                  }
                  else if (json_obj['status'] === '2') {
                    $('#error').removeClass('disappear')
                    self.errorTxt = '你的账户已被禁用！'
                  }
                  else if (json_obj['status'] === '3') {
                    $('#error').removeClass('disappear')
                    self.errorTxt = '用户名或密码错误！'
                  }
                  else if (json_obj['status'] === '4') {
                    $('#error').removeClass('disappear')
                    self.errorTxt = '后台连接错误！'
                  }
                  else {
                    console.log('异常！')
                  }
              }
            else {
              $('#error').removeClass('disappear')
               self.errorTxt = '发生了未知的错误'
            }
          })
      }
      else {
        $('#error').removeClass('disappear')
        this.errorTxt = '用户名或密码为空！'
      }

    }
  },
}
</script>

