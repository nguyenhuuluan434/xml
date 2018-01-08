const monitoring = require('@google-cloud/monitoring');

const projectId = 'ird-cloud';

const metricId = 'custom.googleapis.com/my_metric';

const client = new monitoring.MetricServiceClient();

const request = {
	name: client.projectPath(projectId),
	metricDescriptor: {
		description: 'Daily sales records from all branch stores.',
		displayName: 'Daily Sales',
		type: 'custom.googleapis.com/stores/daily_sales',
		metricKind: 'GAUGE',
		valueType: 'DOUBLE',
		unit: '{USD}',
		labels: [
		{
			key: 'store_id',
			valueType: 'STRING',
			description: 'The ID of the store.',
		},
		],
	},
};

client.createMetricDescriptor(request).then(results => {
	console.log(results);
})
