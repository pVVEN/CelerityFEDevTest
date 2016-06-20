$(function () {
    $('#highchart').highcharts({
        chart: {
            type: 'column'
        },
        colors: ['#5c2946', '#b2bb1c'], 
        exporting: {
         enabled: false
				}, 
        title: {
            text: ''
        },
        legend: {
            enabled: false
        }, 
        xAxis: {
            categories: [
                'Nov',
                'Dec',
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            max: 100, 
            title: {
                text: ''
            }, 
            tickInterval: 20
        },
        plotOptions: {
        		line: {
            		pointInterval: 20
            }, 
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Year',
            data: [49.9, 71.5, 96.4, 29.2, 44.0, 76.0, 35.6, 48.5]
        }, {
            name: 'Year',
            data: [83.6, 78.8, 98.5, 93.4, 56.0, 84.5, 35.0, 74.3]
        }]
    });
});