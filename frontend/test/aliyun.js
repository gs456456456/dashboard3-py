// require it
var Client = require('aliyun-api-gateway').Client;
var crypto = require('crypto');
const co = require('co');

var url = 'http://open.energymost.com/GetRealTimeData'
var aliyun_appkey = "24591790"
var aliyun_appsecret = "f2730fdcc916e26d54b5dad5e08b1bb5"
var emop_appkey = "gQOmt4VfhkywV/OOML/r1A=="
var emop_appsecret = "3+/XmsZ4AEe8xQ4tGex1WQ=="
var client = new Client(aliyun_appkey,aliyun_appsecret);
var emop_headers = {}
emop_headers['X-Auth-AppKey'] = emop_appkey
var body = {}
body['CustomerCode'] = 'bedragon'
body['DeviceHierarchyCode'] = "cementbox1.255.1"
body['ParamNames'] = ["1号仓当前重量", "2号仓当前重量", "3号仓当前重量", "4号仓当前重量"]

var md5 = crypto.createHash('md5');
var s = emop_appkey + body + emop_appsecret
emop_headers['X-Auth-Fig'] = md5.update(s).digest('base64');


co('should ok with post(url)', function* () {
  var url = 'http://open.energymost.com/GetRealTimeData';
  var result = yield client.post(url, {
    headers: {
      accept: 'application/json',
      'content-type': CONTENT_TYPE_FORM
    },
    data: {
    }
  });
  console.log(result)
  console.log(1)
});
  console.log(1)
//console.log(result)
//// send GET request
//it('should ok get(url)', function* () {
//  var url = 'https://dm-81.data.aliyun.com/rest/160601/ip/getIpInfo.json?ip=210.75.225.254';
//  var result = yield client.get(url);
//});
//
//it('should ok with post(url)', function* () {
//  var url = 'https://dm-72.data.aliyun.com/rest/160601/int_image/matching.json';
//  var result = yield client.post(url, {
//    data: {
//      'image': {
//        'dataType': 10,
//        'dataValue': 'base64 content'
//      }
//    }
//  });
//});
