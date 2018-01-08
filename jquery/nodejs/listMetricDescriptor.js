const monitoring = require('@google-cloud/monitoring');

const projectId = 'ird-cloud';

const client = new monitoring.MetricServiceClient();

const request = {
	name: client.projectPath(projectId),
};

client.listMetricDescriptors(request).then(
	results => {
		descriptors = results[0];
		descriptors.forEach(function(descriptor,index){if(descriptor.name==="projects/ird-cloud/metricDescriptors/custom.googleapis.com/my_metric") console.log(descriptor) } );
	}).catch(err => {
		console.log("ERR",err);
	})
	