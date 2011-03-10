/*
---

script: moo.flot.autoscale.js

name: flot.autoScale

description: Autoscale the y axis when seting new min/max coords

license: [ Re-release MIT license 2011]

authors:
  - @fat

requires:
  - core/1.3: '*'
  - more
  - more/utilities/color
  - moo.flot

provides: [flot.series.autoScale]

...

*/

(function (flot) {
    var options = {
        series: { autoScale: null }
    };

    function init(plot) {

        function autoScale(plot, s, datapoints) {
          if (s.autoScale == null) return;

          var axes = plot.getAxes();

          if (!axes.yaxis.options.min) {

            var _datapoints, _max = 0, _current, dataSlice = [], series = plot.getData();

            for (var i = series.length; i--;) {
              _datapoints = series[i].datapoints;
              var j = _datapoints.points.length - 2;
              while (j >= 0) {
                if (_datapoints.points[j] < axes.xaxis.options.max
                  && _datapoints.points[j] > axes.xaxis.options.min) {
                  _current = _datapoints.points[j+1];
                  _max = Math.max(_current, _max);
                }
                j-=2;
              }
            }

            if (_max) axes.yaxis.options.max = _max + (_max * .15);
          }
        }

        plot.hooks.processDatapoints.push(autoScale);
    }

    flot.plot.plugins.push({
        init: init,
        options: options,
        name: 'autoScale',
        version: '1.0'
    });
})(flot);
