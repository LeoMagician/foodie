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
            })
            .when('/dinnerList', {
                controller: 'dinnerListController',
                templateUrl: '/app/modules/views/dinnerList.html'
            })
            .when('/createDinner', {
                controller: 'createDinnerController',
                templateUrl: '/app/modules/views/createDinner.html'
            })
            .when('/setbasic', {
                controller: 'setbasicController',
                templateUrl: '/app/modules/views/createDinner/setbasic.html'
            })
            .when('/setmenu', {
                controller: 'setmenuController',
                templateUrl: '/app/modules/views/createDinner/setmenu.html'
            })
            .when('/setguest', {
                controller: 'setguestController',
                templateUrl: '/app/modules/views/createDinner/setguest.html'
            });
    }]);

    require(['modules/moduleReference'], function(references) {
        require(references, function() {
            angular.bootstrap(document, ['coreModule']);
        });
    });

});