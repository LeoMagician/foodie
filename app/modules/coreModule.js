define(function() {
    var coreModule = angular.module('coreModule', ['ngRoute', 'ui.bootstrap']);

    coreModule.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'homeController',
                templateUrl: '/app/modules/views/home.html'
            })
            .when('/login', {
                controller: 'loginController',
                templateUrl: '/app/modules/views/login.html'
            });
    }]);

    require(['modules/moduleReference'], function(references) {
        require(references, function() {
            angular.bootstrap(document, ['coreModule']);
        });
    });

    // coreModule.controller('commonController', ['$scope', function($scope) {
    //     $scope.title = "Hello there";
    // }]);


});