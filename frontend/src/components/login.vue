<template>
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
    <tip v-show="showTip" :show.sync="showTip" transition="appear">
      <span slot="body">{{errorTxt}}</span>
    </tip>
            </div>
        </div>
</template>

<script>

export default {
  name: 'login',

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
      console.log('aaaa')
      if (this.isValid){
        $.ajaxSetup({
        data: {csrfmiddlewaretoken: '{{ csrf_token }}' },
   });
        //      $.ajaxSetup({
        //        headers : {
        //     'CSRFToken' : getCSRFTokenValue()
        // }
        //  });
         $.post('http://127.0.0.1:8000/confirmapi/',{
            'test':1,
            },function(data){
              window.location.href = '/personalist/'
              console.log(data)
                console.log('success')

            })
      }
    }
  },
  //     if (this.isValid) {
  //       this.$http.post("http://127.0.0.1:8000/confirmapi/", {
  //         user_name: this.user.username,
  //         user_psd: this.user.password
  //       }).then( (response) => {
  //         console.log('send')
  //         var data = eval(response.data)
  //         if (data.success) {
  //           // self.$route.router.go('/user')
  //           console.log('success')
  //         } else {
  //           self.showTip = true
  //           self.errorTxt = data.msg
  //         }
  //       }, () => {
  //         self.showTip = true
  //         self.errorTxt = '发生了未知的错误'
  //       })
  //     } else {
  //       this.showTip = true
  //       this.errorTxt = '用户名或密码为空！'
  //     }
  //   }
  // },
}
</script>

