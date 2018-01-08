from google.cloud import monitoring
def write_time_series():
    client = monitoring.Client()
    resource = client.resource(
        'gce_instance',
        labels={
        'instance_id': 'instance-1',
        'zone': 'us-central1-c',
        }
        )

    metric = client.metric(
        type_='custom.googleapis.com/my_metric',
        labels={
        }
        )
    client.write_point(metric, resource, 3.14)


write_time_series()