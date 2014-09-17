//Reduce

flatArray = function(ary){
		return ary.reduce(function (combine, start) {
				return combine.concat(start);
				})
			}

var arrays = [[1, 2, 3], [4, 5], [6]];

/*The problem was not creating a separate function to call the "reduce" method. Ahhhh.*/
console.log(flatArray(arrays))
