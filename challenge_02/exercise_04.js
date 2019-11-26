const atomicBlonde = (num) => {

	digits = num.toString().split("");
	
	let sum = 0;
	let mul = 1;
	
	for (var i = 0; i < digits.length; i++) {
	  sum += parseInt(digits[i]);
	  mul *= parseInt(digits[i]);
	}
	
	return sum === mul;
	
}

