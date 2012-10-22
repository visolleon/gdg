var codearray = [];
codearray.push(
	'// 绘制的样式\r\n' + 
	'ctx.fillStyle = "#ff0000";\r\n' + 
	'//绘制矩形\r\n' + 
	'ctx.fillRect (150, 10, 200, 50);'
);

codearray.push(
	'// 绘制圆\r\n' +
	'// 设置原点坐标\r\n' +
	'ctx.moveTo(175,175);\r\n' +
	'//arc(横坐标,纵坐标,半径,开始的角度,结束的角度,是否顺时针)\r\n' +
	'ctx.arc(175,175,50,0,Math.PI*2,true);\r\n' +
	'// 描边\r\n' + 
	'ctx.stroke();'
);

codearray.push(
	'//绘制贝塞尔曲线\r\n' + 
	'//参数（3组坐标）：\r\n' + 
	'//    第一组为和曲线的开始点（当前位置）相关联的控制点的坐标\r\n' +
	'//    第二组为和曲线的结束点相关联的控制点的坐标\r\n' +
	'//    第三组为曲线的结束点的坐标\r\n' +
	'ctx.fillStyle = "rgba(255, 0, 0, 0.9)";' + 
	'ctx.beginPath();\r\n' + 
	'ctx.moveTo(75,40);\r\n' + 
	'ctx.bezierCurveTo(75,37,70,25,50,25);\r\n' + 
	'ctx.bezierCurveTo(20,25,20,62.5,20,62.5);\r\n' + 
	'ctx.bezierCurveTo(20,80,40,102,75,120);\r\n' + 
	'ctx.bezierCurveTo(110,102,130,80,130,62.5);\r\n' + 
	'ctx.bezierCurveTo(130,62.5,130,25,100,25);\r\n' + 
	'ctx.bezierCurveTo(85,25,75,37,75,40);\r\n' + 
	'ctx.closePath();\r\n' + 
	'ctx.fill();' 
);

codearray.push(
	'//createLinearGradient 方法接受 4 个参数，表示渐变的起点 (x1,y1) 与终点 (x2,y2)。\r\n' + 
	'//createRadialGradient 方法接受 6 个参数，前三个定义一个以 (x1,y1) 为原点，半径为 r1 的圆，\r\n' + 
	'//						后三个参数则定义另一个以 (x2,y2) 为原点，半径为 r2 的圆。\r\n' + 
	'var radgrad = ctx.createRadialGradient(45,45,10,52,50,50);\r\n' + 
	'radgrad.addColorStop(0, "#A7D30C");\r\n' + 
	'//addColorStop(颜色相对的位置, 颜色)\r\n' + 
	'radgrad.addColorStop(0.9, "#019F62");\r\n' + 
	'radgrad.addColorStop(1, "rgba(1,159,98,0)");\r\n' + 
	'ctx.fillStyle = radgrad;\r\n' + 
	'ctx.fillRect(0,0,150,150);'
);

codearray.push(
	'var img = new Image();\r\n' + 
    'img.onload = function(){\r\n' + 
    '    ctx.save();\r\n' + 
    '    ctx.scale(0.5,0.5);\r\n' +
    '    //直接绘图\r\n' + 
    '    ctx.drawImage(img,100,100);\r\n' + 
    '    ctx.restore();\r\n' +
    '}\r\n' + 
    'img.src = "images/offlinestorage.jpg";\r\n' + 
	'var img2 = new Image();\r\n' + 
    'img2.onload = function(){\r\n' + 
    '    //切割绘图\r\n' + 
    '    //drawImage(图像对象,剪切开始坐标x,y,剪切宽度,高度,绘制的坐标x,y,绘制的宽度,高度)\r\n' + 
    '    ctx.drawImage(img2, 10, 10, 300, 400, 300, 0, 300, 400)\r\n' + 
    '}\r\n' + 
    'img2.src = "images/HTML5_Logo.png";'
);

codearray.push(
	'// 画图案\r\n' + 
	'var img = new Image();\r\n' + 
	'img.src = "images/patt.png";\r\n' + 
	'img.onload = function(){	\r\n' + 	
	'    // create pattern\r\n' + 
	'    var ptrn = ctx.createPattern(img,"repeat");\r\n' + 
	'    ctx.fillStyle = ptrn;\r\n' + 
	'    ctx.fillRect(100,50,400,200);\r\n' + 
	'}'
);

codearray.push(
	'//阴影延伸的距离 x y \r\n' + 
	'ctx.shadowOffsetX = 2;\r\n' + 
	'ctx.shadowOffsetY = 2;\r\n' + 
	'//阴影的模糊程度\r\n' + 
	'ctx.shadowBlur = 2;\r\n' + 
	'ctx.shadowColor = "rgba(0, 0, 0, 0.5)";\r\n' + 	  
	'ctx.font = "30px 华文新魏";\r\n' + 
	'ctx.fillStyle = "Black";\r\n' + 
	'//文字，x轴坐标,y轴坐标\r\n' + 
	'ctx.fillText("画文字和阴影", 300, 100);'
);

codearray.push(
	'var img = new Image();\r\n' + 
	'img.src = "images/performance.jpg";\r\n' + 
	'img.onload = function(){\r\n' + 
	'    var i=150;\r\n' + 
	'    var thread = setInterval(function(){\r\n' + 
	'        i--;\r\n' +
	'        if(i <= 0) {\r\n' + 
	'            clearInterval(thread);\r\n    return;\r\n' + 
	'        }\r\n' + 
	'        ctx.save();\r\n' + 
	'        ctx.scale(1 + (2 - .02 * i), 1 + (2 - .02 * i));\r\n' + 
	'        ctx.clearRect(0,0,img.width + 100,img.height + 100);\r\n' + 
	'        ctx.drawImage(img, 0, 0);\r\n' + 
	'        ctx.restore();\r\n' + 
	'    }, 10);' +
	'}\r\n\r\n'
);

codearray.push(
	'// 清除画布\r\n' + 
	'ctx.clearRect(0,0,770,320);'
);


var showCode = function (i) {
	var code  = codearray[i];
	if(code) {
		document.getElementById('canvasscript').innerHTML = '&lt;script type="text/javascript"&gt;\r\n' + code 
		+ '\r\n&lt;/script&gt;<a class="large button orange right" onselectstart="return false;" onclick="evalCode(8)">Clear</a><a class="large button orange right" onselectstart="return false;" onclick="evalCode(' + i + ')">Run</a>';
		prettyPrint();
	}
}

var evalCode = function (i) {
	clearInterval(window.HTML5Thread);
	var canvas = document.getElementById('canvasexample');
	var ctx = canvas.getContext("2d");

	var code  = codearray[i];
	if(code) {
		eval(code);
	}
}