// trTd;
function trTd(){

	let trTd =document.createElement(`tr`);
	trTd.style.minHeight= "200px"
	for (let i =0 ; i < 7 ; i++){
		let td = document.createElement(`td`);
		td.innerHTML= '&nbsp';
		td.style.border= "1px solid black"
		td.style.minHeight = "20px"
		td.style.textAlign = "center"
		trTd.append(td);
	};
	
	return trTd;
};
// 表头
function trTh(){
	let weekArr = ["MO","TU","WE","TH","FR","SA","SU"]
	let trTh =document.createElement(`tr`);
	weekArr.map(day=>{
		let th = document.createElement(`th`);
		th.style.border= "1px solid black";
		th.style.background= "#E6E6E6";
		th.innerHTML= day;
		trTh.append(th);
	})
	return trTh;
};




// 输出。以及当月有多少天,一号是周几,以及需要几行。
function getDateDayArr(year,mouth){
	let time = new Date(year,mouth-1);
	let tempArr=[];
	// 该月有多少天。
	tempArr.push((new Date(year,mouth)-time)/1000/24/60/60 )
	// 该月第一天是周几。
	tempArr.push(time.getDay() || 7);
	// 需要几行。
	tempArr.push(Math.ceil((tempArr[0]+tempArr[1]-1)/7));

	
	return tempArr;
}


function makeCalendar(elem,year,mouth){
	// table以及其样式
	let table = document.createElement("table");
	table.style.border = "1px solid black"
	table.style.borderCollapse= "collapse"
	table.width = "50%";
	table.id=`calendar`;
	// 添加表头
	table.append(trTh())
	
	let timeDayRows = getDateDayArr(year,mouth);
	for (let i = 0; i < timeDayRows[2]; i++){
		table.append(trTd())
	}
	let tds = table.getElementsByTagName(`td`);
	for (let i = 1; i <=timeDayRows[0] ; i++ ){
		tds[timeDayRows[1]-1+i-1].textContent = i;
	}
	elem.replaceWith(table);
	return table;
}




btn.onclick = a=>{
	if(monthInput.value){
		let value =monthInput.value.split("-");
		makeCalendar(calendar,value[0],value[1])
	}
}