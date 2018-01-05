function delay(){
	return new Promise(resolve => setTimeout(resolve,300));
}

async function delayedLog(item){
	await delay();
	console.log(item);
}


/*async function processArray(array){
	array.forEach(async (item) => {
		await delayedLog(item);
	});
	console.log("Done!")
}*/

/*async function processArray(array){
	for(const item of array){
		await delayedLog(item);
	}
	console.log("Done!")
}*/


async function processArray(array){
	const promises = array.map(delayedLog);
	await Promise.all(promises);
	console.log("Done!")
}
processArray([1,2,3,4,5,6,7,8])
