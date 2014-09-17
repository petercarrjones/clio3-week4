//Reduce

var arrays = [[1, 2, 3], [4, 5], [6]];

function reduce(arrays, concat, start) {
  var current = start;
  for (var i = 0; i < arrays.length; i++)
    current = concat(current, arrays[i]);
  return current;
}

/*arrays.reduce(function(combine,start){
	return combine.concat(start);
})*/
console.log(reduce(arrays,concat,0))
