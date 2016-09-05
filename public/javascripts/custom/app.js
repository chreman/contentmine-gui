// Angular

// App
var app = angular.module('contentMineApp', ['ngRoute']);

// Config
app.config(function($routeProvider, $locationProvider) {

    // Angular Routes.
    $routeProvider

        .when('/', {
            templateUrl : 'partials/index',
            controller  : 'IndexCtrl'
        })

        .when('/getpapers', {
            templateUrl : 'partials/getpapers',
            controller  : 'GetPapersCtrl'
        })

        .when('/quickscrape', {
            templateUrl : 'partials/quickscrape',
            controller  : 'QuickScrapeCtrl'
        })

        .when('/norma', {
            templateUrl : 'partials/norma',
            controller  : 'NormaCtrl'
        })

        .when('/ami', {
            templateUrl : 'partials/ami',
            controller  : 'AmiCtrl'
        })

        .otherwise({redirectTo: '/'});

    // The way of avoiding the old html "#" use. Requires HTML5.
    $locationProvider.html5Mode(true);

});