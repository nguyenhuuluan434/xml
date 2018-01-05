from google.cloud import monitoring

client = monitoring.Client()
# for descriptor in client.list_metric_descriptors():
# 	print(descriptor.type)
# 	print(descriptor.name)

# descriptor = client.metric_descriptor('projects/ird-cloud/metricDescriptors/custom.googleapis.com/my_metric')
# descriptor.delete()

# print('Deleted metric descriptor {}.'.format(descriptor_name))

for descriptor in client.list_metric_descriptors():
	#print(descriptor.type)
	print(descriptor)
