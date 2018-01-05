const Storage = require('@google-cloud/storage');

const storage = Storage();

storage.getBuckets().then((result) =>
{
	const buckets = result[0];
	console.log('Buckets:');
	buckets.forEach((bucket)=>{
		console.log(bucket.name)
	})
}).catch((err)=>{
	console.err("Error:", err);
})