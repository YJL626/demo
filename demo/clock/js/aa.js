let a =document.getElementById(`time`)
let start = document.getElementById(`start`);
let end =document.getElementById(`end`);

class Clock {
	constructor({template}){
		this.template=template;
		 }

		 now(){
		let now =new Date();
		
		let hour =now.getHours()<10? "0" + now.getHours() : now.getHours();
		let min =now.getMinutes()<10? "0" + now.getMinutes() : now.getMinutes();
		let second = now.getSeconds()<10? "0" + now.getSeconds() : now.getSeconds();
		
		let put = this.template.replace("h",hour).
		replace("m",min).
		replace("s",second);
		return put
		 
		}
		 
	start(){
			a.innerHTML=this.now();
			this.timer=setTimeout(()=>this.start(),1000)
	}
	end(){
		clearTimeout(this.timer);
	}
}
let clock = new Clock({template:`h:m:s`});
clock.start();
start.onclick=()=>{
	clock.start();
}
end.onclick=()=>{
	clock.end();
}


