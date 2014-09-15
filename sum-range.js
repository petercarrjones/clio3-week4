/* Sum of a Range*/

var total=[]

function range(start,end){
	for(var i = start; i <= end; i++){
		//(start+i) == i;
		total.push(i);
	}
	return total
}

function Sum(total){
	total.join(total);
	return total;
}

//console.log(range(1,10))

console.log(sum(range(1, 10)));