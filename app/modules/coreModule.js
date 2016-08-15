define(function() {
    var coreModule = angular.module('coreModule', ['ngRoute', 'ui.bootstrap']);

    coreModule.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .otherwise('/')
            .when('/', {
                controller: 'homeController',
                templateUrl: '/app/modules/views/home.html'
            })
            .when('/login', {
                controller: 'loginController'
            })
            .when('/dinner', {
                controller: 'dinnerController',
                templateUrl: '/app/modules/views/dinner.html'
            });
    }]);

    require(['modules/moduleReference'], function(references) {
        require(references, function() {
            angular.bootstrap(document, ['coreModule']);
        });
    });

});