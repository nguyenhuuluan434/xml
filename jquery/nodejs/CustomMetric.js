'use strict';

function createMetricDescriptor(projectId) {
  // [START monitoring_create_metric]
  // Imports the Google Cloud client library
  const monitoring = require('@google-cloud/monitoring');

  // Creates a client
  const client = new monitoring.MetricServiceClient();

  /**
   * TODO(developer): Uncomment and edit the following lines of code.
   */
  // const projectId = 'YOUR_PROJECT_ID';

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

  // Creates a custom metric descriptor
  client
  .createMetricDescriptor(request)
  .then(results => {
  	const descriptor = results[0];

  	console.log('Created custom Metric:\n');
  	console.log(`Name: ${descriptor.displayName}`);
  	console.log(`Description: ${descriptor.description}`);
  	console.log(`Type: ${descriptor.type}`);
  	console.log(`Kind: ${descriptor.metricKind}`);
  	console.log(`Value Type: ${descriptor.valueType}`);
  	console.log(`Unit: ${descriptor.unit}`);
  	console.log('Labels:');
  	descriptor.labels.forEach(label => {
  		console.log(
  			`  ${label.key} (${label.valueType}) - ${label.description}`
  			);
  	});
  })
  .catch(err => {
  	console.error('ERROR:', err);
  });
  // [END monitoring_create_metric]
}

createMetricDescriptor('ird-cloud');


/*function listMetricDescriptors(projectId){
	const monitoring = require('@google-cloud/monitoring');

	const client = new monitoring.MetricServiceClient();
	const request = {
		name: client.projectPath(projectId),
	};

	client.listMetricDescriptors(request).then((results) => {console.log(results[0])}).catch((err) => {console.log(err)});
}

listMetricDescriptors('ird-cloud')
*/

function listMetricDescriptors(projectId) {

	const monitoring = require('@google-cloud/monitoring');
	const client = new monitoring.v3.MetricServiceClient({});
	const request = {
		name: client.projectPath(projectId),
	};
	client
	.listMetricDescriptors(request)
	.then(results => {
		const descriptors = results[0];
		console.log('Metric Descriptors:');
		descriptors.forEach((descriptor) => { console.log(descriptor.name)});
	})
	.catch(err => {
		console.error('ERROR:', err);
	});

}

/*listMetricDescriptors('ird-cloud')*/


