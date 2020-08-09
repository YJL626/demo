/* selectionSort-start */
function selectionSort(arr,order=0){
	/* 从小到到大 */
	if(order===0){
		for(let j = 0; j<arr.length-1;j++){
			for(let i = j;i<arr.length;i++){
				if(arr[j]>arr[i+1]){
					let temp =arr[j];
					arr[j] = arr[i+1];
					arr[i+1]=temp;
				}
			}
		}
		return;
	}
	/* 从大到小*/
	else if(order==1){ 
		for(let j = 0; j<arr.length-1;j++){
			for(let i = j;i<arr.length;i++){
				if(arr[j]<arr[i+1]){
					let temp =arr[j];
					arr[j] = arr[i+1];
					arr[i+1]=temp;
					
				}
			}
		}
		return;
	}
	/* order=other */
	for(let j = 0; j<arr.length-1;j++){
		for(let i = j;i<arr.length;i++){
			if(arr[j]>arr[i+1]){
				let temp =arr[j];
				arr[j] = arr[i+1];
				arr[i+1]=temp;
			}
		}
	}
}
					/* selectionSort-end */
					
					/* bubbleSort-start */
function bubbleSort(arr,order=0){
	/* 从小到大 */
	if (order===0){
		for(let q=0;q<arr.length-1;q++){
			for(let n =0;n<arr.length-q;n++){
				if(arr[n]>arr[n+1]){
					var temp =arr[n+1];
					arr[n+1]=arr[n];
					arr[n]=temp;
				}
			}
		}
		return
	}
	/* 从大到小 */
	else if(order===1){
		for(let q=0;q<arr.length-1;q++){
			for(let n =0;n<arr.length-q;n++){
				if(arr[n]<arr[n+1]){
					var temp =arr[n+1];
					arr[n+1]=arr[n];
					arr[n]=temp;
				}
			}
		}
		return;
	}
	/* order==other */
	for(let q=0;q<arr.length-1;q++){
		for(let n =0;n<arr.length-q;n++){
			if(arr[n]>arr[n+1]){
				var temp =arr[n+1];
				arr[n+1]=arr[n];
				arr[n]=temp;
			}
		}
	}
}
/* bubbleSort-end */



