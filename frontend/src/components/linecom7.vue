<template>
  <div id="linecom7">
<!--     <div>{{get_1}}</div>
    <div>{{get_2}}</div>
    <div>{{get_3}}</div>
    <div>{{get_4}}</div> -->
                <img style='position:absolute;top:-390px;right:-700px;z-index:50' src="../assets/logo2.png">
    <div class="container-fluid">
        <div class="row">
            <h2 class="pull-left" style="font-size: 200%">&nbsp&nbsp&nbsp&nbsp{{factory}}<small style="color:black;font-size:20px;">&nbsp&nbsp&nbsp&nbsp</small>
            <br><small style="font-size: 80%">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp1号车间</small>
            </h2>
            <br>
            <h3 class="pull-right" >&nbsp&nbsp&nbsp</h3>
             <div style="width: 1200px;height:1px;margin-top:1%;margin-left:14%;background-color:#D5D5D5;overflow:hidden;"></div>
        </div>

      <div class="row" style="margin-left:80px">
<!--           <div class="row placeholders"> -->
<!-- <div v-if='message'> -->
           
<div id='machine'class="row">
	<div class="a" id="a1">
				<div class="t1">理瓶机</div>
		<div class="t2">运行状态:<span id="statuscolor1" class="t3">{{b[0]}}</span></div>
				<div class="t2">故障代码:<span class="t3">{{b[1]}}</span></div>
<!-- 		<div class="t2">产量:<span class="t3">{{b[2]}} 瓶</span></div> -->
		<div class="t2">工作速度:<span class="t3">{{b[2]}} 瓶/分钟</span></div>
<!-- 		<div class="t2">批次号:<span class="t3">{{b[4]}}</span></div> -->
    <div class="ion-arrow-right-a myarrow"></div>
	</div>
	<div class="a" id="a2">
				<div class="t1">灌装机</div>
		<div class="t2">运行状态:<span id="statuscolor2" class="t3">{{c[0]}}</span></div>
				<div class="t2">故障代码:<span class="t3">{{c[1]}}</span></div>
<!-- 		<div class="t2">产量:<span class="t3">{{c[2]}} 瓶</span></div> -->
		<div class="t2">工作速度:<span class="t3">{{c[2]}} 瓶/分钟</span></div>
<!-- 		<div class="t2">批次号:<span class="t3">{{c[4]}}</span></div> -->
    <div class="ion-arrow-right-a myarrow"></div>
	</div>
	<div class="a" id="a3">
				<div class="t1">旋盖机</div>
		<div class="t2">运行状态:<span id="statuscolor3" class="t3">{{d[0]}}</span></div>
				<div class="t2">故障代码:<span class="t3">{{d[1]}}</span></div>
<!-- 		<div class="t2">产量:<span class="t3">{{d[2]}} 瓶</span></div> -->
		<div class="t2">工作速度:<span class="t3">{{d[2]}} 瓶/分钟</span></div>
<!-- 		<div class="t2">批次号:<span class="t3">{{d[4]}}</span></div> -->
    <div class="ion-arrow-right-a myarrow"></div>
	</div>
	<div class="a" id="a4">
				<div class="t1">贴标机</div>
		<div class="t2">运行状态:<span id="statuscolor4" class="t3">{{e[0]}}</span></div>
				<div class="t2">故障代码:<span class="t3">{{e[1]}}</span></div>
<!-- 		<div class="t2">产量:<span class="t3">{{e[2]}} 瓶</span></div> -->
		<div class="t2">工作速度:<span class="t3">{{e[2]}} 瓶/分钟</span></div>
<!-- 		<div class="t2">批次号:<span class="t3">{{e[4]}}</span></div> -->
    <div class="ion-arrow-right-a myarrow"></div>
	</div>
	<div class="a" id="a5">
		<div class="t1">装箱机</div>
		<div class="t2">运行状态:<span id="statuscolor5" class="t3">{{f[0]}}</span></div>
				<div class="t2">故障代码:<span class="t3">{{f[1]}}</span></div>
<!-- 		<div class="t2">产量:<span class="t3">{{f[2]}} 瓶</span></div> -->
		<div class="t2">工作速度:<span class="t3">{{f[2]}} 箱/分钟</span></div>
<!-- 		<div class="t2">批次号:<span class="t3">{{f[4]}}</span></div> -->
	</div>

<!--       </div> -->
<!--     <p v-else>No machines are available.</p> -->
</div>

</div>
</div>
</div>
</template>
<style type="text/css">
.upuphat{
    background-color: #666666;
  opacity: 0.5;
  z-index: 2;
  position:absolute;left:102px;top:-90px;
    border-radius: 3px 3px 0 0;
  width: 25px;
  height: 40px;
}
.uphat{
  background-color: #666666;
  opacity: 0.6;
  z-index: 2;
  position:absolute;left:95px;top:-50px;
  border-radius: 5px 5px 0 0;
  width: 40px;
  height: 50px;
}
.pipet{
  background-color:#666666;width:16px;height:65px;position:relative;left:90px;top:76px;
  border-radius: 5px 5px 0 5px;
  z-index: 2;
  color:#666666;
  opacity: 0.6;
}
.pipet2{
    background-color:#666666;width:90px;height:16px;position:relative;left:106px;top:60px;
  border-radius:  0 5px 5px 0;
  z-index: 2;
  color:#666666;
  opacity: 0.6; 
}
.myarrow{
  position: relative;
  font-size: 80px;
  left:270px;
  top:-100px;
  color: #eaac1b;
}
#linecom7{
  background-color: #f3f3f3;
  height: 1000px;
  width: 3000px;
  z-index: 1;
}
.t1{
	font-family: "Microsoft YaHei";
	font-size: 30px;
  position:relative;
  left: 80px;
  top:8px;
  color: #666666;
}
.t2{
  position: relative;
  font-size: 18px;
  left: 20px;
  top:9px;
  margin-top:10px;
  margin-left:20px;
  color: #666666;
}
.t3{
  font-size: 20px;
  font-weight: bold;
}
#machine{
/*	height: 2000px*/
}
.container{
/*	 margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;*/
}
.c1{        
      position:relative;
      left:24%;
      top:7%;
      font-family: "Microsoft YaHei";
      font-size: 22px;
      color: #666666;

}
.c2{
  font-size: 15px;
  position:relative;
  left:20%;
  top:10%;
  margin-top: 3px;
  color: #666666;
}
.c3{
  font-weight: bold;
  font-size: 18px;
}

#r1{
	position: absolute;
	left: 200px;
	top:100px;
}
#r2{
	position: absolute;
	left: 600px;
	top:100px;
}
#r3{
	position: absolute;
	left: 1000px;
	top:100px;
}
#r4{
  position: absolute;
  left: 1400px;
  top:100px;  
}
.a{
	background:#f3f3f3;
	width: 260px;
	height: 220px;
	z-index: 50;
	border-width:5px;
	border-style:solid;
	border-color:#666666;
}
#a1{
  position: absolute;
  left: 100px;
  top:300px;

}
#a2{
	position: absolute;
	left: 450px;
	top:300px;

}
#a3{
	position: absolute;
	left: 800px;
	top:300px;
}
#a4{
	position: absolute;
	left: 1150px;
	top:300px;
}
#a5{
	position: absolute;
	left: 1500px;
	top:300px;
}
/*#line4{
	height: 100%
}*/
.r {
    border-radius: 25%;
    background: #0066cc;
    width: 230px;
    height:260px;
    margin-top:80px;

/*    position: absolute;*/
/*    position: fixed;
    left: 0;
    top:0;*/

    z-index:5; 
}
online{
	display: inline;
}
.s{
	border-radius: 8%;
  background: #f3f3f3;
  position: relative;
  left: 12%;
  top: 14%;
  width: 76%;
  height:70%;
}
</style>
<script>
// import '../../assets/js/mqttws31.js'
import store from '../store/store.js'
export default {
  name: 'linecom7',
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
                 console.log("onMessageArrived:" + message.payloadString);
                 var data = JSON.parse(message.payloadString)
                 if (data['data']){
                 if (data['boxid'] === "jwbox1.255.1") {
                    var data2 = data['data']
                    if (data2[0]['Val'] === '1'){
                        var status1 = '运行中';
                        $('#statuscolor1').css('color','green')
                    }
                    else {
                      if (data2[1]['Val'] === '1') 
                      {
                        var status1 = '故障中'
                        $('#statuscolor1').css('color','#FFA500')
                      }
                      else {
                        var status1 = '停止中'
                        $('#statuscolor1').css('color','red')
                      }
                    }


                    self.b = [status1,data2[2]['Val'],data2[3]['Val']]
                    console.log(self.b)
                   
                 }
                 else if (data['boxid'] === "jwbox1.255.2") {
                    var data3 = data['data']
                     if (data3[0]['Val'] === '1'){
                        var status2 = '运行中';
                        $('#statuscolor2').css('color','green')
                    }
                    else {
                      if (data3[1]['Val'] === '1') 
                      {
                        var status2 = '故障中'
                        $('#statuscolor2').css('color','#FFA500')
                      }
                      else {
                        var status2 = '停止中'
                        $('#statuscolor2').css('color','red')
                      }
                    }
                    self.c = [status2,data3[2]['Val'],data3[3]['Val']]
                   
                 }
                 else if (data['boxid'] === "jwbox1.255.3") {
                    var data4 = data['data']
                          if (data4[0]['Val'] === '1'){
                        var status3 = '运行中';
                        $('#statuscolor3').css('color','green')
                    }
                    else {
                      if (data4[1]['Val'] === '1') 
                      {
                        var status3 = '故障中'
                        $('#statuscolor3').css('color','#FFA500')
                      }
                      else {
                        var status3 = '停止中'
                        $('#statuscolor3').css('color','red')
                      }
                    }
                    self.d = [status3,data4[2]['Val'],data4[3]['Val']]
                
                 }
                 else if (data['boxid'] === "jwbox1.255.4") {
                    var data5 = data['data']
                          if (data5[0]['Val'] === '1'){
                        var status4 = '运行中';
                        $('#statuscolor4').css('color','green')
                    }
                    else {
                      if (data5[1]['Val'] === '1') 
                      {
                        var status4 = '故障中'
                        $('#statuscolor4').css('color','#FFA500')
                      }
                      else {
                        var status4 = '停止中'
                        $('#statuscolor4').css('color','red')
                      }
                    }
                    self.e = [status4,data5[2]['Val'],data5[3]['Val']]
                   
                 }
                 else if (data['boxid'] === "jwbox1.255.5") {
                    var data6 = data['data']
                          if (data6[0]['Val'] === '1'){
                        var status5 = '运行中';
                        $('#statuscolor5').css('color','green')
                    }
                    else {
                      if (data6[1]['Val'] === '1') 
                      {
                        var status5 = '故障中'
                        $('#statuscolor5').css('color','#FFA500')
                      }
                      else {
                        var status5 = '停止中'
                        $('#statuscolor5').css('color','red') 
                      }
                    }
                    self.f = [status5,data6[2]['Val'],data6[3]['Val']]
                   
                 }
                 else
                 {

                 }
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