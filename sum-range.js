/* Sum of a Range*/

var total=[]

function range(start,end){
	total.push (start)
	for(var i = start; i > end; i++)
		total.push=[i];
	return total
}

function Sum(){}

console.log(range(1,10))

//console.log(sum(range(1, 10)));