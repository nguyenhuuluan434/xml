from google.cloud import monitoring

def delete_metric_descriptor(descriptor_name):
    # [START delete_metric_descriptor]
    client = monitoring.Client()

    descriptor = client.metric_descriptor(descriptor_name)
    descriptor.delete()

    print('Deleted metric descriptor {}.'.format(descriptor_name))

delete_metric_descriptor('projects/ird-cloud/metricDescriptors/custom.googleapis.com/my_metric')
