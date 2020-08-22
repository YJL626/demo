let clock={
	timer:null,
	status:false,
	refreshTime(){
		let now = new Date();
		let NS= ("0"+now.getSeconds()).slice(-2);
		let NM= ("0"+now.getMinutes()).slice(-2);
		let NH= ("0"+now.getHours()).slice(-2);
		
		h.textContent=NH;
		m.textContent=NM;
		s.textContent=NS;
	},
	start(){
		this.status=true;
		this.refreshTime();
		this.timer=setTimeout(()=>{
			setTimeout(()=>{
				this.start();
			},500)
		},500)
	},
	end(){
		clearTimeout(this.timer)
		this.status=false;
	}
}
clock.start();
start.onclick =()=>{
	if(clock.status){
		alert(`停止后再开始`)
		return
	}
	clock.start();
}
end.onclick=()=>{
	clock.end();
}




