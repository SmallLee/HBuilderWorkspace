/**
 * Created by Administrator on 2014/11/7.
 */

function drawRec(id){
//通过id获取canvas对象
	var canvas = document.getElementById(id);
	//获得上下文对象
	var context = canvas.getContext("2d");
	//画布的填充颜色
	context.fillStyle = "green";
	//描边颜色
	context.strokeStyle  = "red";
	//画笔宽度
	context.lineWidth = 5;
	//绘制绿色矩形
	context.fillRect(0,0,400,300);
	//绘制红色矩形
	context.strokeRect(50,50,180,120);
}

function drawCircle(id){
	var canvas = document.getElementById(id);
	var context = canvas.getContext("2d");
	context.fillStyle = "#f1f2f3";
    context.fillRect(0,0,400,400);
    for (var i = 0; i < 10; i++) {
//  	context.beginPath();
    	context.arc(i*20,i*20,i*10,0,Math.PI*2,true);
// 		context.closePath();
    	context.fillStyle = 'rgba(255,0,0,0.25)';
    	context.fill();
//  	context.strokeStyle = 'red';
//  	context.stroke();
    }
}

function drawText(id){
	var canvas = document.getElementById(id);
	var context = canvas.getContext('2d');
	context.fillStyle = "green";
	context.fillRect(0,0,600,300);
	context.fillStyle = "white";
	context.fillStyle = "white";
	context.font = "bold 30px '微软雅黑'";
	context.textBaseline = "hanging";
	context.textAlign = "start";
	context.fillText("欢迎收看麦子学院",0,0);
	context.fillText("《HTML5+CSS3轻松入门视频教程》",0,30)
}

function saveImg(id){
	var canvas = document.getElementById(id);
	var context = canvas.getContext("2d");
	context.fillStyle = "green";
	context.fillRect(0,0,300,200);
	window.location = canvas.toDataURL('image/png');
}

var context;
var width,height;
var i;
function startAnim(id){
	var canvas = document.getElementById("canvas");
	context = canvas.getContext('2d');
	width = canvas.width;
	height = canvas.height;
	setInterval(painting,500);
	i = 0;
}
function painting(){
	context.fillStyle = "green";
	context.fillRect(0,0,width,height);
	context.clearRect(10,10,width,height)
	context.fillStyle = "green";
	context.fillRect(i,20,10,10);
	i += 20;
}
