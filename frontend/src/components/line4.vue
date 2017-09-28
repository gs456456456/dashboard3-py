<template>
  <div id="line4">
<!--     <div>{{get_1}}</div>
    <div>{{get_2}}</div>
    <div>{{get_3}}</div>
    <div>{{get_4}}</div> -->
    <div class="container-fluid">
        <div class="row">
            <h2 class="pull-left">&nbsp&nbsp&nbsp&nbsp设备看板<small style="color:black;font-size:20px;">&nbsp&nbsp&nbsp&nbsp当天统计</small>
            <br><small style="font-size: 20px">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp纸杯机1号车间</small>
            </h2>
            <br>
            <h3 class="pull-right" >&nbsp&nbsp&nbsp</h3>
             <div style="width: 1000px;height:1px;margin:0px auto;padding:0px;background-color:#D5D5D5;overflow:hidden;"></div>
        </div>

      <div class="row">
<!--           <div class="row placeholders"> -->
<!-- <div v-if='message'> -->
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="info-box">
          
            <span class="info-box-icon bg-yellow" id="8_color"><i class="fa fa-play-circle-o" id="8_playstop"></i></span>
          
            <div class="info-box-content">
              <span class="info-box-title">纸杯机 #9</span>
              
                <span class="info-box-text">生产效率</span>
                <span class="info-box-number" id="8_生产效率">91.7%</span>
              
                <span class="info-box-text">生产数量</span>
                <span class="info-box-number" id="8_生产数量">13847</span>
              
                <span class="info-box-text">报警次数</span>
                <span class="info-box-number" id="8_报警次数">3</span>
              
                <span class="info-box-text">运行时间</span>
                <span class="info-box-number" id="8_运行时间">7.2小时</span>
              
                <span class="info-box-text">通电时间</span>
                <span class="info-box-number" id="8_通电时间">8.3小时</span>
              
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="info-box">
          
            <span class="info-box-icon bg-grey" id="0_color"><i class="fa fa-stop-circle-o" id="0_playstop"></i></span>
          
            <div class="info-box-content">
              <span class="info-box-title">纸杯机 #1</span>
              
                <span class="info-box-text">生产效率</span>
                <span class="info-box-number" id="0_生产效率">NaN%</span>
              
                <span class="info-box-text">生产数量</span>
                <span class="info-box-number" id="0_生产数量">NaN</span>
              
                <span class="info-box-text">报警次数</span>
                <span class="info-box-number" id="0_报警次数">NaN</span>
              
                <span class="info-box-text">运行时间</span>
                <span class="info-box-number" id="0_运行时间">NaN小时</span>
              
                <span class="info-box-text">通电时间</span>
                <span class="info-box-number" id="0_通电时间">NaN小时</span>
              
            </div>
          </div>
        </div>
                <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="info-box">
            <span class="info-box-icon bg-green"><i class="fa fa-play-circle-o"></i></span>
            <div class="info-box-content">
              <span class="info-box-title">1</span>
                <span class="info-box-text">2</span>
                <span class="info-box-number" id="a">3</span>
            </div>
          </div>
        </div>

<!--       </div> -->
<!--     <p v-else>No machines are available.</p> -->
</div>
</div>
</div>
</div>
</template>
<style type="text/css">
  
</style>
<script>
// import '../../assets/js/mqttws31.js'
export default {
  name: 'line4',
  data(){
  	return{
  		machinelist:{},
      get_1:'',
      get_2:'',
      get_3:'',
      get_4:'',
      message:'',
      val_list:[],

  	}
  },
   created(){
    
  },	
  mounted(){
    var self = this
    function mqtt1() {
             var client = new Paho.MQTT.Client("192.168.1.106", Number(9001), "clientId");

             // set callback handlers
             client.onConnectionLost = onConnectionLost;
             client.onMessageArrived = onMessageArrived;

             var line = {"boxid": "cementbox1.255.1"}
             var jsonobj = JSON.stringify(line)
             var topic = '/openapi/request'
             var topic_rev = '/openapi/response/cementbox1.255.1'
             // connect the client
             client.connect({onSuccess: onConnect});

             // called when the client connects
             function onConnect() {
                 // Once a connection has been made, make a subscription and send a message.
                 console.log("onConnect");
                 client.subscribe(topic_rev);
                 // client.subscribe(topic_rev);
                 var message = new Paho.MQTT.Message(jsonobj);
                 message.destinationName = topic;
                 client.send(message);


             }
             // Create a client instance

             // called when the client loses its connection
             function onConnectionLost(responseObject) {
                 if (responseObject.errorCode !== 0) {
                     console.log("onConnectionLost:" + responseObject.errorMessage);
                 }
             }

             // called when a message arrives
             function onMessageArrived(message) {
                 // console.log("onMessageArrived:" + message.payloadString);
                 if(message.payloadString['data'] === 'null'){
                  console.log('aaaaaa')
                 }
                 else {
                  var result = JSON.parse(message.payloadString)
                  if(result['Messages']==='Success'){
                  self.message = true
                  self.get_1 = result['data'][0]["Val"]
                  self.get_2 = result['data'][1]["Val"]
                  self.get_3 = result['data'][2]["Val"]
                  self.get_4 = result['data'][3]["Val"]
                  self.val_list.push(self.get_1,self.get_2,self.get_3,self.get_4)
                  console.log(self.get_1)
                  console.log(self.get_2)
                 }
                 else {
                   self.message=false
                 }
               }
             }
         }
         var b = setInterval(() => {
           mqtt1()
         }, 6000)

  },
  methods:{

  },
  components: { },
}
</script>

<style>
</style>