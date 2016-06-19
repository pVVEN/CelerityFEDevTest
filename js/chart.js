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
            title: {
                text: ''
            }
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
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5]
        }, {
            name: 'Year',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3]
        }]
    });
});