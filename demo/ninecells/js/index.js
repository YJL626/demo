
let nineCells={
	// 生成指定长度不重复的随机数，返回数组。（最小，最大值，长度）；
	count:4,
	working:null,
	timer:null,
	
	
	
	// 生成指定长度不重复的随机数，返回数组。（最小，最大值，长度）；
	randomNumber(min=0,max=2,length=this.count){
		if(max-min+1 < length){
			max+=length - max-min+1
			console.log("指定长度不重复的随机整数，最大值-最小值要大于长度,自动增加max");
		}
		
		let temp = new Set;
		let arr = [];
		
		while (arr.length<length){
			temp.add(Math.trunc(Math.random()*(max+1-min)+min));
			arr = Array.from(temp);
		}
		return arr;
	},
	// changgeColor//（变色数量）
	changgeColor(count=this.count){
		
		nineCells.resetColor();
		let cells = document.querySelectorAll(`.cell`)
		let randomCellArr = nineCells.randomNumber(0,8,count);
		randomCellArr.map(e=>{
			cells[e].style.backgroundColor=`rgb(
			${Math.trunc(Math.random()*257)},
			${Math.trunc(Math.random()*257)},
			${Math.trunc(Math.random()*257)})`
		})
		
	},
	// 颜色恢复默认
	resetColor(){
		let cells = document.querySelectorAll(`.cell`);
		for (let a of cells){
			a.style.backgroundColor=`#FFA600`;
		}
	},
		
	// 开始闪
	start(){
		if(this.working){
			alert(`结束之后再开始`);
			return;
		}
		let time;
		let a = prompt(`一秒闪几次`,1);
		(a)? time = 1000/a:time = 1000;
		
		this.changgeColor();
		this.timer = setInterval(this.changgeColor,time);
		this.working=true;
	},
	// 结束闪
	end(){
		this.resetColor();
		clearInterval(this.timer);
		this.working=false;
	}
}
let start =document.getElementById(`start`);
let end = document.getElementById(`end`);
start.onclick=()=>{
	nineCells.start();
}

end.onclick = () =>{
	nineCells.end();
}




