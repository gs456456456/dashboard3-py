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
          
            <span class="info-box-icon bg-green" id="0_color"><i class="fa fa-play-circle-o" id="0_playstop"></i></span>
          
            <div class="info-box-content">
              <span class="info-box-title">前剪切罐</span>
              
                <span class="info-box-text">重量</span>
                <span class="info-box-number" id="0_生产效率">{{a[0]}}kg</span>
              
                <span class="info-box-text">温度</span>
                <span class="info-box-number" id="0_生产数量">{{a[1]}}℃</span>
              
                <span class="info-box-text">剪切电流</span>
                <span class="info-box-number" id="0_报警次数">{{a[2]}}A</span>
                
                <span class="info-box-text">搅拌电流</span>
                <span class="info-box-number" id="0_报警次数">{{a[3]}}A</span>
              
            </div>
          </div>
        </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="info-box">
          
            <span class="info-box-icon bg-green" id="0_color"><i class="fa fa-play-circle-o" id="0_playstop"></i></span>
          
            <div class="info-box-content">
              <span class="info-box-title">前缓冲罐</span>
              
                <span class="info-box-text">重量</span>
                <span class="info-box-number" id="0_生产效率">{{a[4]}}kg</span>
              
<!--                 <span class="info-box-text">温度</span>
                <span class="info-box-number" id="0_生产数量">{{a[5]}}</span> -->
              
<!--                 <span class="info-box-text">剪切电流</span>
                <span class="info-box-number" id="0_报警次数">{{a[5]}}</span> -->
                
                <span class="info-box-text">搅拌电流</span>
                <span class="info-box-number" id="0_报警次数">{{a[5]}}A</span>
              
            </div>
          </div>
        </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="info-box">
          
            <span class="info-box-icon bg-green" id="0_color"><i class="fa fa-play-circle-o" id="0_playstop"></i></span>
          
            <div class="info-box-content">
              <span class="info-box-title">后剪切罐</span>
              
                <span class="info-box-text">重量</span>
                <span class="info-box-number" id="0_生产效率">{{a[6]}}kg</span>
              
<!--                 <span class="info-box-text">温度</span>
                <span class="info-box-number" id="0_生产数量">{{a[9]}}</span> -->
              
<!--                 <span class="info-box-text">剪切电流</span>
                <span class="info-box-number" id="0_报警次数">{{a[8]}}</span> -->
                
                <span class="info-box-text">搅拌电流</span>
                <span class="info-box-number" id="0_报警次数">{{a[7]}}A</span>
              
            </div>
          </div>
        </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="info-box">
          
            <span class="info-box-icon bg-green" id="0_color"><i class="fa fa-play-circle-o" id="0_playstop"></i></span>
          
            <div class="info-box-content">
              <span class="info-box-title">后缓冲罐</span>
              
                <span class="info-box-text">重量</span>
                <span class="info-box-number" id="0_生产效率">{{a[8]}}kg</span>
              
                <span class="info-box-text">温度</span>
                <span class="info-box-number" id="0_生产数量">{{a[9]}}℃</span>
              
                <span class="info-box-text">剪切电流</span>
                <span class="info-box-number" id="0_报警次数">{{a[10]}}A</span>
                
                <span class="info-box-text">搅拌电流</span>
                <span class="info-box-number" id="0_报警次数">{{a[11]}}A</span>
              
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
import store from '../../store/store.js'
export default {
  name: 'line4',
  data(){
    return{
      a:['NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN'],
      factory:'',
    }
  },
   created(){
    
  },  
  mounted(){
    var self = this
    self.factory = store.state.factoryname1
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
                 console.log("onMessageArrived:" + message.payloadString);
                 var data = JSON.parse(message.payloadString)
                 if (data['boxid'] === 'simulator.255.1'){
                     var data1 = data['data']['Result']
                     self.a = [data1[1]['Val'].toFixed(2),data1[8]['Val'].toFixed(2),data1[17]['Val'].toFixed(2),data1[16]['Val'].toFixed(2),data1[2]['Val'].toFixed(2),data1[18]['Val'].toFixed(2),data1[3]['Val'].toFixed(2),data1[21]['Val'].toFixed(2),data1[5]['Val'].toFixed(2),data1[9]['Val'].toFixed(2),data1[24]['Val'].toFixed(2),data1[23]['Val'].toFixed(2)]
                 }
                 else if (data['boxid'] === 'simulator.255.2') {
                    var data2 = data['data']['Result']
                    if (data2[0]['Val'] === true){
                        var status1 = '运行中';
                        $('#b1').removeClass()
                        $('#b2').removeClass() 
                        $('#b1').addClass("info-box-icon bg-green")
                        $('#b2').addClass("fa fa-play-circle-o")
                    }
                    else {
                      if (data2[1]['Val'] === true) 
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


                    self.b = [status1,data2[2]['Val'],data2[3]['Val'],data2[4]['Val'],data2[5]['Val']]
                   
                 }
                 else if (data['boxid'] === 'simulator.255.3') {
                    var data3 = data['data']['Result']
                     if (data3[0]['Val'] === true){
                        var status2 = '运行中';
                        $('#c1').removeClass()
                        $('#c2').removeClass() 
                        $('#c1').addClass("info-box-icon bg-green")
                        $('#c2').addClass("fa fa-play-circle-o")
                    }
                    else {
                      if (data3[1]['Val'] === true) 
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
                    self.c = [status2,data3[2]['Val'],data3[3]['Val'],data3[4]['Val'],data3[5]['Val']]
                   
                 }
                 else if (data['boxid'] === 'simulator.255.4') {
                    var data4 = data['data']['Result']
                          if (data4[0]['Val'] === true){
                        var status3 = '运行中';
                        $('#d1').removeClass()
                        $('#d2').removeClass() 
                        $('#d1').addClass("info-box-icon bg-green")
                        $('#d2').addClass("fa fa-play-circle-o")
                    }
                    else {
                      if (data4[1]['Val'] === true) 
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
                    self.d = [status3,data4[2]['Val'],data4[3]['Val'],data4[4]['Val'],data4[5]['Val']]
                
                 }
                 else if (data['boxid'] === 'simulator.255.5') {
                    var data5 = data['data']['Result']
                          if (data5[0]['Val'] === true){
                        var status4 = '运行中';
                        $('#e1').removeClass()
                        $('#e2').removeClass() 
                        $('#e1').addClass("info-box-icon bg-green")
                        $('#e2').addClass("fa fa-play-circle-o")
                    }
                    else {
                      if (data5[1]['Val'] === true) 
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
                    self.e = [status4,data5[2]['Val'],data5[3]['Val'],data5[4]['Val'],data5[5]['Val']]
                   
                 }
                 else if (data['boxid'] === 'simulator.255.6') {
                    var data6 = data['data']['Result']
                          if (data6[0]['Val'] === true){
                        var status5 = '运行中';
                        $('#f1').removeClass()
                        $('#f2').removeClass() 
                        $('#f1').addClass("info-box-icon bg-green")
                        $('#f2').addClass("fa fa-play-circle-o")
                    }
                    else {
                      if (data6[1]['Val'] === true) 
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
                    self.f = [status5,data6[2]['Val'],data6[3]['Val'],data6[4]['Val'],data6[5]['Val']]
                   
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
            

        var interval2 = setInterval(() => {
          // Todo...
          var line2 = {"boxid": "jwbox2.255.1"}
          var jsonobj2 = JSON.stringify(line2)
          var message2 = new Paho.MQTT.Message(jsonobj2);
          message2.destinationName = topic;
          client.send(message2);  

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