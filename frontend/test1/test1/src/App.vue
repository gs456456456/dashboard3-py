<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
const {
  CONTENT_TYPE_JSON,
  Client
} = require('../../../api-gateway-nodejs-sdk/');

/////
var crypto = require('crypto');
const co = require('co');

var url = 'http://open.energymost.com/GetRealTimeData'
var url2 = '/api/GetRealTimeData'
var aliyun_appkey = "24591790"
var aliyun_appsecret = "f2730fdcc916e26d54b5dad5e08b1bb5"
var emop_appkey = "gQOmt4VfhkywV/OOML/r1A=="
var emop_appsecret = "3+/XmsZ4AEe8xQ4tGex1WQ=="
var client = new Client(aliyun_appkey,aliyun_appsecret);
var emop_headers = {}
emop_headers['X-Auth-AppKey'] = emop_appkey
//emop_headers['x-Ca-Stage'] = 'RELEASE'

var body = {}
body['CustomerCode'] = "bedragon"
body['ParamNames'] = ["1号仓当前重量", "2号仓当前重量", "3号仓当前重量", "4号仓当前重量"]
body['DeviceHierarchyCode'] = "cementbox1.255.1"

//var body_str = '{"CustomerCode": "bedragon", "ParamNames": ["1\u53f7\u4ed3\u5f53\u524d\u91cd\u91cf", "2\u53f7\u4ed3\u5f53\u524d\u91cd\u91cf", "3\u53f7\u4ed3\u5f53\u524d\u91cd\u91cf", "4\u53f7\u4ed3\u5f53\u524d\u91cd\u91cf"], "DeviceHierarchyCode": "cementbox1.255.1"}'


var body_str = JSON.stringify(body)
var md5 = crypto.createHash('md5');
var s = emop_appkey + body_str + emop_appsecret
console.log(s)
emop_headers['X-Auth-Fig'] = md5.update(s).digest('hex');
//emop_headers['X-Auth-Fig']='4dd6fc3c0eaab16ed629c7a92d6af3f4'
co(function* () {
  //var url = 'http://api.aaaa.com/putstring';


  var result = yield client.post(url2, {
    headers: {
      accept: 'application/json',
      // 'Access-Control-Allow-Origin':'*',
      'X-Auth-AppKey':emop_headers['X-Auth-AppKey'],
      'X-Auth-Fig':emop_headers['X-Auth-Fig'],
      'content-type': Client.CONTENT_TYPE_JSON
      //（可选）Body MD5,服务端会校验Body内容是否被篡改,建议Body非Form表单时添加此Header
      // headers.put(HttpHeader.HTTP_HEADER_CONTENT_MD5, MessageDigestUtil.base64AndMD5(body));
    },
    signHeaders: {
      //emop_headers,
      //'X-Auth-AppKey':emop_headers['X-Auth-AppKey'],
      //'X-Auth-Fig':emop_headers['X-Auth-Fig'],
    },
    //query: body['CustomerCode']+body['DeviceHierarchyCode']+body['ParamNames']
    //,
    //data: body_str
    data:body
  });

  console.log(JSON.stringify(result));
});
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
