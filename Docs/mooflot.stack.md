flot-stack
==============

**jsFiddle example:** http://jsfiddle.net/ee323/

Data format
============

To be able to stack items, different series need to have the same Xaxis value. 
Keep in mind to *turn on* the plugin in the options. Example:

	series: {
		bars: {
			show: true
		},
		stack: true
	},

Mouse events
============

The stack plugin adds a extra property to the item.datapoint object passed to the event handler function. 
In this case it adds the starting point in Y axis for that particular selected stacked element. So the 
datapoint will return:

	datapoint: Array[3]
		0: 5			// the X axis value
		1: 72			// the Y axis top value of that stacked element
		2: 42			// the Y axis starting point of that stacked element
		
So to retrieve the actuall size of that particular element the value is the difference between [2] and [1]:
	`var valueOfThisStack = datapoint[2] - datapoint[1];`

	
See the example for more information.


