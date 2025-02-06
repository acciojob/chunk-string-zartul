function stringChop(str, size) {
	let arr = [];
	if(str==null){
		return [];
	}
    for (let i=0; i<str.length; i=i+size) {
        arr.push(str.slice(i, i+size));
    }
    return arr;
}

// Do not change the code below
// const fop(str, size));