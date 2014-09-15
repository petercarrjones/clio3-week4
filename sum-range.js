/* Sum of a Range*/

var total=[]

function range(start,end,step){
	if (step >= 0){
		for(var i = start; i <= end; i++){
		//(start+i) == i;
		total.push(i);
		}
	else if (step < 0){
		for(var i = start; i <= end; i++){
		//(start+i) == i;
		total.push(i);
		}	
	}
	return total
}

function sum(total){
	var count = 0
	for (var i = 0; i < total.length; i++)
		count = total[i]+count;
	return count
}

console.log(range(1,10))

//console.log(sum(range(1, 10)));