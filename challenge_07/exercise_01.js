const multipleArguments = ( ...params ) => {

	let result = 1;
	if (params.length === 0) {
		return 0;
	}
	
	for(let num of params){
		result *= num;
	}
	return result;
}