function multipleArguments(){
	
	let result = 1;
	if (arguments.length === 0) {
		return 0;
	}
	
	for(let num of arguments){
		result *= num;
	}
	return result;
}

const multipleArguments_ES6 = ( ...params ) => {
	
	let result = 1;
	if (params.length === 0) {
		return 0;
	}
	
	for(let num of params){
		result *= num;
	}
	return result;
}

console.log(multipleArguments(1, 2, 3,4, 5, 6));
console.log(multipleArguments_ES6(1, 2, 3,4, 5, 6));
