<template>
  <div id="line4">
<!--     <div>{{get_1}}</div>
    <div>{{get_2}}</div>
    <div>{{get_3}}</div>
    <div>{{get_4}}</div> -->
    <div class="container">
        <div class="row">
            <h2 class="pull-left" style="font-size: 150%">&nbsp&nbsp&nbsp&nbsp{{factory}}<small style="color:black;font-size:20px;">&nbsp&nbsp&nbsp&nbsp</small>
            <br><small style="font-size: 80%">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp1号车间</small>
            </h2>
            <br>
            <h3 class="pull-right" >&nbsp&nbsp&nbsp</h3>
             <div style="width: 1000px;height:1px;margin:0px auto;margin-top:1.5%;background-color:#D5D5D5;overflow:hidden;"></div>
        </div>

      <div class="row">
<!--           <div class="row placeholders"> -->
<!-- <div v-if='message'> -->

            <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="info-box">
          
            <span id="b1" class="info-box-icon bg-grey"><i class="fa fa-stop-circle-o" id="b2"></i></span>
          
            <div class="info-box-content">
              <span class="info-box-title">理瓶机</span>
              
                <span class="info-box-text">运行状态</span>
                <span class="info-box-number" id="0_生产效率">{{b[0]}}</span>
                              <span class="info-box-text">故障代码</span>
                <span class="info-box-number" id="0_生产效率">{{b[1]}}</span>

<!--                 <span class="info-box-text">产量</span>
                <span class="info-box-number" id="0_生产数量">{{b[2]}}瓶</span> -->
              
                <span class="info-box-text">工作速度</span>
                <span class="info-box-number" id="0_报警次数">{{b[2]}}瓶/分钟</span>
              
<!--                 <span class="info-box-text">批次号</span>
                <span class="info-box-number" id="0_运行时间">{{b[4]}}</span> -->
              
            </div>
          </div>
        </div>

    <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="info-box">
          
            <span class="info-box-icon bg-grey" id="c1"><i class="fa fa-stop-circle-o" id="c2"></i></span>
          
            <div class="info-box-content">
              <span class="info-box-title">灌装机</span>
                <span class="info-box-text">运行状态</span>
                <span class="info-box-number">{{c[0]}}</span>
                                              <span class="info-box-text">故障代码</span>
                <span class="info-box-number" id="0_生产效率">{{c[1]}}</span>
              
<!--                 <span class="info-box-text">产量</span>
                <span class="info-box-number">{{c[2]}}瓶</span> -->
              
                <span class="info-box-text">工作速度</span>
                <span class="info-box-number" id="0_报警次数">{{c[2]}}瓶/分钟</span>
              
<!--                 <span class="info-box-text">批次号</span>
                <span class="info-box-number" id="0_运行时间">{{c[4]}}</span> -->
              
            </div>
          </div>
        </div>

    <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="info-box">
          
            <span class="info-box-icon bg-grey" id="d1"><i class="fa fa-stop-circle-o" id="d2"></i></span>
          
            <div class="info-box-content">
                <span class="info-box-title">旋盖机</span>
                <span class="info-box-text">运行状态</span>
                <span class="info-box-number">{{d[0]}}</span>
                                            <span class="info-box-text">故障代码</span>
                <span class="info-box-number" id="0_生产效率">{{d[1]}}</span>
<!--                 <span class="info-box-text">产量</span>
                <span class="info-box-number">{{d[2]}}瓶</span> -->
              
                <span class="info-box-text">工作速度</span>
                <span class="info-box-number" id="0_报警次数">{{d[2]}}瓶/分钟</span>
              
<!--                 <span class="info-box-text">批次号</span>
                <span class="info-box-number" id="0_运行时间">{{d[4]}}</span> -->
              
            </div>
          </div>
        </div>
    <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="info-box">
          
            <span class="info-box-icon bg-grey" id="e1"><i class="fa fa-stop-circle-o" id="e2"></i></span>
          
            <div class="info-box-content">
              <span class="info-box-title">贴标机</span>
                <span class="info-box-text">运行状态</span>
                <span class="info-box-number">{{e[0]}}</span>
                                              <span class="info-box-text">故障代码</span>
                <span class="info-box-number" id="0_生产效率">{{e[1]}}</span>
              
<!--                 <span class="info-box-text">产量</span>
                <span class="info-box-number">{{e[2]}}瓶</span> -->
              
                <span class="info-box-text">工作速度</span>
                <span class="info-box-number" id="0_报警次数">{{e[2]}}瓶/分钟</span>
              
<!--                 <span class="info-box-text">批次号</span>
                <span class="info-box-number" id="0_运行时间">{{e[4]}}</span> -->
              
            </div>
          </div>
        </div>

    <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="info-box">
          
            <span class="info-box-icon bg-grey" id="f1"><i class="fa fa-stop-circle-o" id="f2"></i></span>
          
            <div class="info-box-content">
              <span class="info-box-title">装箱机</span>
                <span class="info-box-text">运行状态</span>
                <span class="info-box-number">{{f[0]}}</span>
                                            <span class="info-box-text">故障代码</span>
                <span class="info-box-number" id="0_生产效率">{{f[1]}}</span>
<!--                 <span class="info-box-text">产量</span>
                <span class="info-box-number">{{f[2]}}瓶</span> -->
              
                <span class="info-box-text">工作速度</span>
                <span class="info-box-number" id="0_报警次数">{{f[2]}}箱/分钟</span>
              
<!--                 <span class="info-box-text">批次号</span>
                <span class="info-box-number" id="0_运行时间">{{f[4]}}</span> -->
              
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
import store from '../store/store.js'
export default {
  name: 'line7',
  data(){
    return{
      // a:['NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN'],
      b:['NaN','NaN','NaN'],
      c:['NaN','NaN','NaN'],
      d:['NaN','NaN','NaN'],
      e:['NaN','NaN','NaN'],
      f:['NaN','NaN','NaN'],
      factory:'',
    }
  },
   created(){
    
  },  
  mounted(){
    var self = this
    self.factory = store.state.factoryname2
    console.log()
             var client = new Paho.MQTT.Client("111.231.114.186", Number(9001), "clientId");
             // set callback handlers
             client.onConnectionLost = onConnectionLost;
             client.onMessageArrived = onMessageArrived;


             var line = {"boxid": "simulator.255.1"}
             var jsonobj = JSON.stringify(line)
             var topic = '/openapi/request'
             var topic_rev = '/openapi/response/#'
             // connect the client
             client.connect({onSuccess: onConnect,keepAliveInterval:10});
             // called when the client connects
             //  function sendrequest(){
             //    var message = new Paho.MQTT.Message(jsonobj);
             //     message.destinationName = topic;
             //     client.send(message);
             // }
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
                console.log(1)
                 console.log("onMessageArrived:" + message.payloadString);
                 var data = JSON.parse(message.payloadString)
                 if (data['data']) {
                 if (data['boxid'] === 'jwbox1.255.1') {
                    var data2 = data['data']
                    if (data2[0]['Val'] === '1'){
                        var status1 = '运行中';
                        $('#b1').removeClass()
                        $('#b2').removeClass() 
                        $('#b1').addClass("info-box-icon bg-green")
                        $('#b2').addClass("fa fa-play-circle-o")
                    }
                    else {
                      if (data2[1]['Val'] === '1') 
                      {
                        var status1 = '故障中'
                        $('#b1').removeClass()
                        $('#b2').removeClass() 
                        $('#b1').addClass("info-box-icon bg-yellow")
                        $('#b2').addClass("fa fa-play-circle-o")
                      }
                      else {
                        var status1 = '停止中'
                        $('#b1').removeClass()
                        $('#b2').removeClass() 
                        $('#b1').addClass("info-box-icon bg-red")
                        $('#b2').addClass("fa fa-stop-circle-o")
                      }
                    }


                    self.b = [status1,data2[2]['Val'],data2[3]['Val']]
                   
                 }
                 else if (data['boxid'] === 'jwbox1.255.2') {
                    var data3 = data['data']
                     if (data3[0]['Val'] === '1'){
                        var status2 = '运行中';
                        $('#c1').removeClass()
                        $('#c2').removeClass() 
                        $('#c1').addClass("info-box-icon bg-green")
                        $('#c2').addClass("fa fa-play-circle-o")
                    }
                    else {
                      if (data3[1]['Val'] === '1') 
                      {
                        var status2 = '故障中'
                        $('#c1').removeClass()
                        $('#c2').removeClass() 
                        $('#c1').addClass("info-box-icon bg-yellow")
                        $('#c2').addClass("fa fa-play-circle-o")
                      }
                      else {
                        var status2 = '停止中'
                        $('#c1').removeClass()
                        $('#c2').removeClass() 
                        $('#c1').addClass("info-box-icon bg-red")
                        $('#c2').addClass("fa fa-stop-circle-o")
                      }
                    }
                    self.c = [status2,data3[2]['Val'],data3[3]['Val']]
                   
                 }
                 else if (data['boxid'] === 'jwbox1.255.3') {
                    var data4 = data['data']
                          if (data4[0]['Val'] === '1'){
                        var status3 = '运行中';
                        $('#d1').removeClass()
                        $('#d2').removeClass() 
                        $('#d1').addClass("info-box-icon bg-green")
                        $('#d2').addClass("fa fa-play-circle-o")
                    }
                    else {
                      if (data4[1]['Val'] === '1') 
                      {
                        var status3 = '故障中'
                        $('#d1').removeClass()
                        $('#d2').removeClass() 
                        $('#d1').addClass("info-box-icon bg-yellow")
                        $('#d2').addClass("fa fa-play-circle-o")
                      }
                      else {
                        var status3 = '停止中'
                        $('#d1').removeClass()
                        $('#d2').removeClass() 
                        $('#d1').addClass("info-box-icon bg-red")
                        $('#d2').addClass("fa fa-stop-circle-o")
                      }
                    }
                    self.d = [status3,data4[2]['Val'],data4[3]['Val']]
                
                 }
                 else if (data['boxid'] === 'jwbox1.255.4') {
                    var data5 = data['data']
                          if (data5[0]['Val'] === '1'){
                        var status4 = '运行中';
                        $('#e1').removeClass()
                        $('#e2').removeClass() 
                        $('#e1').addClass("info-box-icon bg-green")
                        $('#e2').addClass("fa fa-play-circle-o")
                    }
                    else {
                      if (data5[1]['Val'] === '1') 
                      {
                        var status4 = '故障中'
                        $('#e1').removeClass()
                        $('#e2').removeClass() 
                        $('#e1').addClass("info-box-icon bg-yellow")
                        $('#e2').addClass("fa fa-play-circle-o")
                      }
                      else {
                        var status4 = '停止中'
                        $('#e1').removeClass()
                        $('#e2').removeClass() 
                        $('#e1').addClass("info-box-icon bg-red")
                        $('#e2').addClass("fa fa-stop-circle-o")
                      }
                    }
                    self.e = [status4,data5[2]['Val'],data5[3]['Val']]
                   
                 }
                 else if (data['boxid'] === 'jwbox1.255.5') {
                    var data6 = data['data']
                          if (data6[0]['Val'] === '1'){
                        var status5 = '运行中';
                        $('#f1').removeClass()
                        $('#f2').removeClass() 
                        $('#f1').addClass("info-box-icon bg-green")
                        $('#f2').addClass("fa fa-play-circle-o")
                    }
                    else {
                      if (data6[1]['Val'] === '1') 
                      {
                        var status5 = '故障中'
                        $('#f1').removeClass()
                        $('#f2').removeClass() 
                        $('#f1').addClass("info-box-icon bg-yellow")
                        $('#f2').addClass("fa fa-play-circle-o")
                      }
                      else {
                        var status5 = '停止中'
                        $('#f1').removeClass()
                        $('#f2').removeClass() 
                        $('#f1').addClass("info-box-icon bg-red")
                        $('#f2').addClass("fa fa-stop-circle-o")
                      }
                    }
                    self.f = [status5,data6[2]['Val'],data6[3]['Val']]
                   
                 }
                 else
                 {

                 }

               //   if(message.payloadString['data'] === 'null'){          
               //    console.log('aaaaaa')
               //   }
               //   else {
               //    var result = JSON.parse(message.payloadString)
               //    if (result['data']['Message'] === 'Sucess'){
               //    self.message = true
               //    self.get_1 = result['data'][0]["Val"]
               //    self.get_2 = result['data'][1]["Val"]
               //    self.get_3 = result['data'][2]["Val"]
               //    self.get_4 = result['data'][3]["Val"]
               //    self.val_list.push(self.get_1,self.get_2,self.get_3,self.get_4)
               //  }
               //  else {
               //    self.message = false
               //  }
               // }
             }
            }
        var interval1 = setInterval(() => {
          var line1 = {"boxid": "jwbox1.255.1"}
          var jsonobj1 = JSON.stringify(line1)
          var message1 = new Paho.MQTT.Message(jsonobj1);
          message1.destinationName = topic;
          client.send(message1);  
 
             }, 6000)
        var interval2 = setInterval(() => {
          // Todo...
          var line2 = {"boxid": "jwbox1.255.2"}
          var jsonobj2 = JSON.stringify(line2)
          var message2 = new Paho.MQTT.Message(jsonobj2);
          message2.destinationName = topic;
          client.send(message2);  

        }, 6000)
          var interval3 = setInterval(() => {
          // Todo...
          var line3 = {"boxid": "jwbox1.255.3"}
          var jsonobj3 = JSON.stringify(line3)
          var message3 = new Paho.MQTT.Message(jsonobj3);
          message3.destinationName = topic;
          client.send(message3);  

        }, 6000)
          var interval4 = setInterval(() => {
          // Todo...
          var line4 = {"boxid": "jwbox1.255.4"}
          var jsonobj4 = JSON.stringify(line4)
          var message4 = new Paho.MQTT.Message(jsonobj4);
          message4.destinationName = topic;
          client.send(message4);  

        }, 6000)
          var interval5 = setInterval(() => {
          // Todo...
          var line5 = {"boxid": "jwbox1.255.5"}
          var jsonobj5 = JSON.stringify(line5)
          var message5 = new Paho.MQTT.Message(jsonobj5);
          message5.destinationName = topic;
          client.send(message5);  

        }, 6000)
          var interval6 = setInterval(() => {
          // Todo...
          var line6 = {"boxid": "jwbox1.255.6"}
          var jsonobj6 = JSON.stringify(line6)
          var message6 = new Paho.MQTT.Message(jsonobj6);
          message6.destinationName = topic;
          client.send(message6);  

        }, 6000)


  // function mqtt2() {
  //            var client = new Paho.MQTT.Client("192.168.1.106", Number(9001), "clientId");

  //            // set callback handlers
  //            client.onConnectionLost = onConnectionLost;
  //            client.onMessageArrived = onMessageArrived;


  //            var line = {"boxid": "cementbox2.255.1"}
  //            var jsonobj = JSON.stringify(line)
  //            var topic = '/openapi/request'
  //            var topic_rev = '/openapi/response/cementbox1.255.1'
  //            // connect the client
  //            client.connect({onSuccess: onConnect,keepAliveInterval:10});

  //            // called when the client connects
  //            function onConnect() {
  //                // Once a connection has been made, make a subscription and send a message.
  //                console.log("onConnect");
  //                 client.subscribe(topic_rev);
  //                // client.subscribe(topic_rev);
  //                var message = new Paho.MQTT.Message(jsonobj);
  //                message.destinationName = topic;
  //                client.send(message);
  //            }
  //            // Create a client instance

  //            // called when the client loses its connection
  //            function onConnectionLost(responseObject) {
  //                if (responseObject.errorCode !== 0) {
  //                    console.log("onConnectionLost:" + responseObject.errorMessage);
  //                }
  //            }

  //            // called when a message arrives
  //            function onMessageArrived(message) {
  //                console.log("onMessageArrived:" + message.payloadString);
  //                if(message.payloadString['data'] === 'null'){
  //                 self.message = false
  //                 console.log('aaaaaa')
  //                }
  //                else {
  //                 var result = JSON.parse(message.payloadString)
  //                 self.message = true
  //                 self.get_1 = result['data'][0]["Val"]
  //                 self.get_2 = result['data'][1]["Val"]
  //                 self.get_3 = result['data'][2]["Val"]
  //                 self.get_4 = result['data'][3]["Val"]
  //                 self.val_list.push(self.get_1,self.get_2,self.get_3,self.get_4)
  //                 console.log(self.get_1)
  //                 console.log(self.get_2)
  //              }
  //            }
  //           var b = setInterval(() => {
  //             onConnect()     
  //        }, 6000)

  //        }
  //        mqtt2()

        },
  methods:{

  },
  components: { },
}
</script>

<style>
</style>