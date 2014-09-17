//Reduce

var arrays = [[1, 2, 3], [4, 5], [6]];

/*function reduce(array, combine, start) {
  var current = start;
  for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
  return current;
}*/
arrays.reduce(function(combine,start){
	return combine.concat(start);
})
console.log(arrays.reduce)
