const capitaliseTheFront = (string) => {

	let words = string.split(" ");
	
	for(idx in words){
		word = words[idx].toLowerCase();
		words[idx] = word.charAt(0).toUpperCase() + word.slice(1);
	}
	
	return words.join(" ");
}

console.log(capitaliseTheFront("Quite a Long SENTENCE!"));
