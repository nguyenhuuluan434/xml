from google.cloud import monitoring

client = monitoring.Client();
descriptor = client.metric_descriptor(
				'custom.googleapis.com/my_metric',
				metric_kind = monitoring.MetricKind.GAUGE,
				value_type = monitoring.ValueType.DOUBLE,
				description = 'this is simple example of a custom metric.')
descriptor.create()