MOOTOOLS FLOT
=============

![Screenshot](http://f.cl.ly/items/323p1i3R1J0o2F1w0n0m/Screen%20shot%202011-03-10%20at%2010.59.32%20AM.png)

This is a direct port of flot from jquery to mootools (+ a few plugins)...

Everything is as originally wrote in v 0.6 (execept now runs on mootools).

Documentation can be found here [http://flot.googlecode.com/svn/trunk/API.txt](http://flot.googlecode.com/svn/trunk/API.txt)

Live examples
----------

####Lines
- __Lines:__                    http://jsfiddle.net/UL3d9/  
- __Lines with bezier curves:__ http://jsfiddle.net/eQ3n8/
- __Lines with points:__        http://jsfiddle.net/4zpFS/  

####Bars
- __Bars:__                     http://jsfiddle.net/MPLyB/  
- __Bars with stack:__          http://jsfiddle.net/J4mPM/   

####Pie
- __Pie chart:__                http://jsfiddle.net/D996U/  

####Moving Chart
- __Self updating chart:__      http://jsfiddle.net/xmVLx/ 


How to use
----------

Instead of overloading the dollar (like in jquery), i put flot on a flot namespace...

    // So this...

    $.plot({...});

    // Becomes

    flot.plot({...});

Everything else about the api should be the same.

<3 @fat

