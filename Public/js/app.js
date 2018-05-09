// Declare app level module which depends on filters, and services
angular.module('Revolution', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'html/Home.html',
                controller: 'RevolutionController',
                css: 'css/home.css',
            })
            .when('/registration', {
                templateUrl: 'html/registration.html',
                controller: 'RegistrationController',
                css: 'css/registration.css',
            })
            .when('/feedback', {
                templateUrl: 'html/feedback.html',
                controller: 'FeedbackController',
                css: 'css/feedback.css'
            })

            // .otherwise({
            //     templateUrl: 'views/error.html',
            //     css: 'css/error.css'
            // });
        // use the HTML5 History API
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    })
    .run(function() {

    });