/* Sum of a Range*/

var total=[]

function range(start,end){
	for(var i = start; i <= end; i++){
		//(start+i) == i;
		total.push(i);
	}
	return total
}

function sum(total){
	count=0
	for (var i = 0; i < total.length; i++)
		count = total.charAt(i)+count;
	return count
}

//console.log(range(1,10))

console.log(sum(range(1, 10)));