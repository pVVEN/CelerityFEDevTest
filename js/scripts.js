/*
scripts.js
by
Owen McNamara
*/

var main = angular.module('main', ['ngRoute', 'ngSanitize', 'highcharts-ng']);

main.config(function($routeProvider)
{
	$routeProvider
		.when('/', {
			templateUrl : 'partials/main.html',
			controller  : 'mainController'
		})
		.otherwise({
			redirectTo: '/'
		});
});

main.controller('mainController', function($scope, $sce)
{
	$scope.navArray = [{
		text: 'Button',
		url: '#'
	}, {
		text: 'Button',
		url: '#'
	}, {
		text: 'Button',
		url: '#'
	}, {
		text: 'Button',
		url: '#'
	}, {
		text: 'Button',
		url: '#'
	}, {
		text: 'Button',
		url: '#'
	}, {
		text: 'Button',
		url: '#'
	}];

	$scope.alertArray = [{
		text: '<b>'+$scope.clientName+':</b> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod', 
		img: 'img/icon-alert.png'
	}, {
		text: '<b>'+$scope.clientName+':</b> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod', 
		img: 'img/icon-alert.png'
	}, {
		text: '<b>'+$scope.clientName+':</b> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod', 
		img: 'img/icon-alert.png'
	}];

	$scope.currentAlert = $scope.alertArray[0];

	$scope.notificationsA = "13";
	$scope.notificationsB = "4";

	$scope.clientName = "Owen McNamara";

	$scope.memberBtn = {text: 'Button', url: '#'};

	$scope.s_main = {
		sectionTitle: 'Section Title', 
		left: {
			text: '&nbsp;'
		}, 
		right: {
			subtitle: 'Sub section title', 
			title: 'Title goes here. Right here.', 
			sectionType: 'Section', 
			section: 'Section name', 
			date: '01/02/03', 
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia', 
			learnMore: '#'
		}
	};

	$scope.s_chart = {
		sectionTitle: 'Section Title', 
		chartDDText: 'Drop Down', 
		chartDDArray: [{
			text: 'Action', 
			url: '#'
		}, {
			text: 'Another action', 
			url: '#'
		}, {
			text: 'Something else here', 
			url: '#'
		}, {
			text: 'Another link', 
			url: '#'
		}, {
			text: 'Things and stuff', 
			url: '#'
		}], 
		left: {
			title: 'Title goes here. Right here.', 
			sectionType: 'Section', 
			section: 'Section name', 
			date: '01/02/03', 
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia'
		}, 
		chart: {
			name: 'Chart Name', 
			percent: '1'
		}, 
		right: {
			title: 'Title goes here. Right here.', 
			sectionType: 'Section', 
			section: 'Section name', 
			date: '01/02/03', 
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia'
		}
	};

	$scope.s_blog = {
		sectionTitle: 'Section Title', 
		post: { 
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor', 
			linkText: 'Section Link', 
			linkURL: '#'
		}
	};

	$scope.s_members = {
		sectionTitle: 'Section Title', 
		btnText: 'Button', 
		btnURL: '#', 
		memberArray: [{
			name: 'Tom Wahl', 
			img: 'img/profileLarge.png', 
			title: 'Manager', 
			email: 'twahl@celerity.com', 
			phone: '(123) 456-7890'
		}, {
			name: 'Don Bob', 
			img: 'img/profileLarge.png', 
			title: 'Sr. Executive', 
			email: 'dbob@celerity.com', 
			phone: '(123) 456-7891'
		}, {
			name: 'Bill Grey', 
			img: 'img/profileLarge.png', 
			title: 'Analyst', 
			email: 'bgrey@celerity.com', 
			phone: '(123) 456-7892'
		}]
	}

	$scope.footerLinks = [
		{
			links: [{
				text: 'Content Link', 
				url: '#'
			}]
		}, {
			links: [{
				text: 'Content Link', 
				url: '#'
			}, {
				text: 'Content Link', 
				url: '#'
			}, {
				text: 'Content Link', 
				url: '#'
			}]
		}, {
			links: [{
				text: 'Content Link', 
				url: '#'
			}, {
				text: 'Content Link', 
				url: '#'
			}, {
				text: 'Content Link', 
				url: '#'
			}]
		}, {
			links: [{
				text: 'Content Link', 
				url: '#'
			}, {
				text: 'Content Link', 
				url: '#'
			}, {
				text: 'Content Link', 
				url: '#'
			}]
		}, {
			links: [{
				text: 'Content Link', 
				url: '#'
			}, {
				text: 'Content Link', 
				url: '#'
			}, {
				text: 'Content Link', 
				url: '#'
			}]
		}, {
			links: [{
				text: 'Content Link', 
				url: '#'
			}, {
				text: 'Content Link', 
				url: '#'
			}, {
				text: 'Content Link', 
				url: '#'
			}]
		}, {
			links: [{
				text: 'Content Link', 
				url: '#'
			}]
		}
	];

	$scope.returnTrustedHTML = function(html)
	{
		return $sce.trustAsHtml(html);
	}
});

main.directive('customchart', function () {
	return {
	    restrict:'E',
	    scope: {},
	    template: '<highchart config="highchartsNG"></highchart>',

	    controller: function($scope, $element){
	    	$scope.highchartsNG = {
	    		options: {
					chart: {
			            type: 'column', 
			            height: 200
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
			        plotOptions: {
			        		line: {
			            		pointInterval: 20
			            }, 
			            column: {
			                pointPadding: 0.2,
			                borderWidth: 0
			            }
			        }
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
			        series: [{
			            name: 'Year',
			            data: [49.9, 71.5, 96.4, 29.2, 44.0, 76.0, 35.6, 48.5]
			        }, {
			            name: 'Year',
			            data: [83.6, 78.8, 98.5, 93.4, 56.0, 84.5, 35.0, 74.3]
			        }]
			};
	    }
	}
});