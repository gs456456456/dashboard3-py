// require it
var Client = require('aliyun-api-gateway').Client;
const co = require('co');
// create client instance with appkey and appsecret
var client = new Client('appKey', 'appSecret');

// send GET request
//co('should ok get(url)', function* () {
//  var url = 'https://dm-81.data.aliyun.com/rest/160601/ip/getIpInfo.json?ip=210.75.225.254';
//  var result = yield client.get(url);
//});

co('should ok with post(url)', function* () {
  var url = 'https://dm-72.data.aliyun.com/rest/160601/int_image/matching.json';
  var result = yield client.post(url, {
    data: {
      'image': {
        'dataType': 10,
        'dataValue': 'base64 content'
      }
    }
  });
  console.log(result)
});

