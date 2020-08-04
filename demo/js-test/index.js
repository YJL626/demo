let arrPrimes=[];

console.log(arrPrimes);
// 写入dom；
function writeP(){
	let value = prompt("获取指定范围内的素数",100);
	showPrimes(value);
	if(arrPrimes==false){
		document.write("<div>请输入数字</div>")
	}else{
		document.write(`<div>${value}以内的素数有<span>${arrPrimes.length}</span>个分别是<p>${arrPrimes}<p></div>`);
	}
}
/* 穷举 */
function showPrimes(n){
	if(Number(n)!==NaN){
		for(q=1;q<n;q++){
			isPrimes(q);
		}
	}else{
		console.log("aa")
	}
}
/* 是素数写入arr，不是return上一层 继续穷举*/
function isPrimes(n){
	for(i=2;i<n;i++){
		if(n % i === 0) return ;
	}
arrPrimes.push(n);
}


writeP();


