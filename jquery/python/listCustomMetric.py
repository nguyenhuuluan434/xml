#!/bin/python
from google.cloud import monitoring
from rx import Observable, Observer

client = monitoring.Client()

source = Observable.from_(client.list_metric_descriptors())
# Observable.from_(client.list_metric_descriptors())\
# 			.map(lambda s: s.name)\
# 			.filter(lambda i: i == "custom.googleapis.com/my_metric")\
# 			.subscribe(lambda v: print("Received: {0}".format(v)));

# class PrintObserver(Observer):

#     def on_next(self, value):
#         print("Received {0}".format(value))

#     def on_completed(self):
#         print("Done!")

#     def on_error(self, error):
#         print("Error Occurred: {0}".format(error))




# source.subscribe(PrintObserver())

source.subscribe(on_next=lambda value: print("Received {0}".format(value)),
	on_completed=lambda: print("Done!"),
	on_error=lambda error: print("Error Occurred: {0}".format(error))
	)

#source = Observable.from_(client.list_metric_descriptors())
# name = source.map(lambda s: s.name)

# filtered = name.filter(lambda i: i == "custom.googleapis.com/my_metric")

# filtered.subscribe(lambda value: print(value))

# for descriptor in client.list_metric_descriptors():
# 	#print(descriptor.type)
# #	if descriptor.name== "custom.googleapis.com/my_metric":
# 	print(descriptor)
