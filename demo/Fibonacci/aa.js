function rabbit(n){
	let arr = [1,1];
	for (let i =2; i<n;i++){
		arr[i]=arr[i-1]+arr[i-2]
	}
	console.log(arr)
	return arr[n-1]
}
window.onload =()=>{
	
	let a= document.getElementById(`rabbitbtn`);
	a.onclick=()=>{
		let mouth = Number(rabbitValue.value);
		let Amount =document.getElementById("rabbitAmount");
		if (mouth>=1 && mouth<=1476){
			console.log(10);
			Amount.innerHTML = rabbit(mouth)+"只兔子";
		}else if(mouth==""||mouth>1476){
			Amount.innerHTML = `请输入1到1476之间的月份`;
		}
	}
	
}

