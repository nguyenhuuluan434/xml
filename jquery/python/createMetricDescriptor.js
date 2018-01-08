const monitoring = require('@google-cloud/monitoring');

const projectId = 'ird-cloud';

const client = new monitoring.MetricServiceClient();