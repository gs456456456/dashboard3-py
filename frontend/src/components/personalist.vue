<template>
	<div id="personalist">
    <div id="showpersonal">
      <div class="container-fluid">
        <div class="row">
    <div id="cchoose">客户选择：</div>
</div>
<div class="row"> 
  <ul id="linelist" style="list-style-typenone">
  </ul>
  <!-- <div class="col-md-6 col-sm-6 col-xs-12"> -->
  </div>
</div>
</div>
</div>
</template>
<style type="text/css">
  #showpersonal{
    margin-top: 3%;
    margin-left:-12%;
  }
ul {list-style:none;}
li {}
#cchoose{
  margin-left: 12%;
}
#linelist{
  margin-top:3%;
}
</style>
<script>
import store from '../store/store.js'

export default {
  name: 'personalist',
  data(){
  	return{
  		line:{
  		},
  		linelist:'',
      device:false,
  	}
  },
  created(){

  },	
  mounted(){
      function isMobile(){
        var ua = navigator.userAgent;
        var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
            isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
            isAndroid = ua.match(/(Android)\s+([\d.]+)/),
            isMobile = isIphone || isAndroid;
        if(isMobile) {
            return true;
        }else {
            return false;
        }
      }
      this.device = isMobile()
      console.log(this.device)
      var a = this.line = store.state.line
            var name1
            var name2
    for(var i=0;i<a.length;i++){
      console.log(this.linelist)
      // this.linelist += '<li><button onclick="location.assign('../pages/line'+a[i]+'/'+'line'+a[i]+'.html')'+'>'+a[i]+'</button></li>'"
            // this.linelist += '<li><button onclick="location.assign("../pages/line4/line4.html")">'+a[i]+'</button></li>'
            if (a[i]==='4'){
                name1 = '上海生农生化制品有限公司'
                store.state.factoryname1 = name1
                if(this.device === true){
                            this.linelist += '<li><a href="/#/line'+a[i]+'" class="col-md-4 col-sm-4 col-xs-12 button button-small style="list-style-typenone">'+name1+'</a></li></div><div class="col-md-4 col-sm-4 col-xs-12"></div>'}
                else {
                      this.linelist += '<li><a href="/#/linecom'+a[i]+'" class="col-md-4 col-sm-4 col-xs-12 button button-small style="list-style-typenone">'+name1+'</a></li></div><div class="col-md-4 col-sm-4 col-xs-12"></div>'
                }
              }
            else if(a[i]==='7'){
                name2 = '巴斯夫植物保护有限公司'
                store.state.factoryname2 = name2
                if(this.device === true){
                            this.linelist += '<li><a href="/#/line'+a[i]+'" class="col-md-4 col-sm-4 col-xs-12 button button-small style="list-style-typenone">'+name2+'</a></li></div><div class="col-md-4 col-sm-4 col-xs-12"></div>'
                          }
                else{
                      this.linelist += '<li><a href="/#/linecom'+a[i]+'" class="col-md-4 col-sm-4 col-xs-12 button button-small style="list-style-typenone">'+name2+'</a></li></div><div class="col-md-4 col-sm-4 col-xs-12"></div>'}
            }

    }  
    console.log(this.linelist)
  	 $('#linelist').html(this.linelist)
  },
  methods:{
     // $(ul).children.click(function  (argument) {
     //   // body...
     //  window.location.href('/#/line4')
     // })
  }
  }	
</script>