/* Sum of a Range*/

var total=[]

function range(start, end, step){
	if (range.length < 3){
		for(var i = start; i <= end; i++)
		total.push(i);
	}
	else if (step < 0){
		for(var i = end; i >= start; i==i + step)
		total.push(i);
	}	
	else {
		for(var i = start; i <= end; i== i + step)
		total.push(i);
		
	}
	return total	
}

function sum(total){
	var count = 0
	for (var i = 0; i < total.length; i++)
		count = total[i]+count;
	return count
}

console.log(range(1, 10, 2))

//console.log(sum(range(1, 10)));
