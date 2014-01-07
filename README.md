MOOTOOLS FLOT
=============

![Screenshot](http://f.cl.ly/items/323p1i3R1J0o2F1w0n0m/Screen%20shot%202011-03-10%20at%2010.59.32%20AM.png)

This is a direct port of flot from jquery to mootools (+ a few plugins)...

Everything is as originally wrote in v 0.6 (execept now runs on mootools).

Documentation can be found here [http://flot.googlecode.com/svn/trunk/API.txt](http://flot.googlecode.com/svn/trunk/API.txt)

Live examples
----------

*Lines: * http://jsfiddle.net/YuWqj/1/
*Lines with points: * http://jsfiddle.net/YuWqj/

*Bars: * http://jsfiddle.net/YuWqj/2/
*Bars with stack: * http://jsfiddle.net/ee323/

*Pie chart: * http://jsfiddle.net/238XE/



How to use
----------

Instead of overloading the dollar (like in jquery), i put flot on a flot namespace...

    // So this...

    $.plot({...});

    // Becomes

    flot.plot({...});

Everything else about the api should be the same.

<3 @fat

