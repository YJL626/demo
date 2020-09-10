
	function pack(size=20,color = true){
		// 选中canvas
		let canvas = document.getElementById('aa');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		canvas.oncontextmenu = a=>false;
		// 获取行数，列数
		let columns = Math.trunc(canvas.width/size);
		let rows = Math.trunc(canvas.height/size);
		// 设定随机起始行
		let startRowsArr = [];
		for (let i = 0; i < columns ; i++){
			startRowsArr[i] = getRandom(0,columns);
		}
		function drawCanvas(){
			let ctx = canvas.getContext('2d');
			// 添加画布
			ctx.fillStyle = "rgba(0,0,0,.1)"
			ctx.fillRect(0,0,canvas.width,canvas.height);
			
			if(color){
				
				ctx.fillStyle = `rgb(${getRandom(0,255)}
				,${getRandom(0,255)}
				,${getRandom(0,255)})`;
			}else{
				ctx.fillStyle = "green"
				
			}
			ctx.font = `${size}px ser`;
				for (let i = 0; i < columns; i++){
					ctx.fillText(getRandom(0,1)
					,i*size
					,startRowsArr[i]++*size);
				}
				//  0.1到达下方后重置
				startRowsArr = startRowsArr.map(a=>{
					if(a > rows*getRandom(7,15,10)){
						return rows*getRandom(0,3,10);
					}
					return a
				})
			}
		
		return drawCanvas;
		
	}
// 获取随机数
function getRandom(a,b,c = 1){
	[a,b]=[Math.min(a,b),Math.max(a,b)];
	return (Math.trunc(Math.random()*(b-a+1))+a)/c
}
// 声明初始值；
let size = 18;
let color = false;
let intervalMs = 25 ;
let drawCanvas = pack(size,color);
drawCanvas();
let drawTimer = setInterval(drawCanvas,intervalMs);
// 开关设置事件。
let constroller = document.getElementById("controller");

constroller.onclick = function(event){
		if(!(event.target.type === "button"))return;
		if(!this.contains(event.target))return;
		let btn = event.target;
		switch(btn.id){
			// 增加字体按钮
			case "font-add" :
			clearInterval(drawTimer);
			size += 5;
			drawCanvas = pack(size,color)
			drawTimer = setInterval(drawCanvas,intervalMs);
			break;
			
			// 减小字体按钮
			case "font-minus" :
			clearInterval(drawTimer);
			size -= 5;
			if(size < 5){
				size = 5;
				alert("最小了")
			}
			drawCanvas = pack(size,color)
			drawTimer = setInterval(drawCanvas,intervalMs);
			break;
			
			// 加速按钮
			case "speed-add" :
			clearInterval(drawTimer);
			intervalMs -= 5;
			if(intervalMs < 0){
				alert("最快了")
				intervalMs = 0;
			}
			intervalMs
			drawCanvas = pack(size,color)
			drawTimer = setInterval(drawCanvas,intervalMs);
			break;
			
			case "speed-minus" :
			clearInterval(drawTimer);
			intervalMs += 5;
			drawCanvas = pack(size,color)
			drawTimer = setInterval(drawCanvas,intervalMs);
			break;
			
			case "color-on-off" :
			clearInterval(drawTimer);
			color = !color;
			drawCanvas = pack(size,color)
			drawTimer = setInterval(drawCanvas,intervalMs);
			break;
		}
}