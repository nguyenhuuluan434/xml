const monitoring = require('@google-cloud/monitoring');

const projectId = 'ird-cloud';
const metricId = 'custom.googleapis.com/stores/daily_sales';
const client = new monitoring.MetricServiceClient();

const request = {
	name : client.metricDescriptorPath(projectId,metricId),
}

client.deleteMetricDescriptor(request)
	.then(results => 
		{console.log(`Deleted ${metricId}`, results[0]);
	}).catch(err => {
		console.error("ERROR:", err);
	})
