define(function() {
    var coreModule = angular.module('coreModule');

    coreModule.controller('homeController', function($scope) {
            $scope.name = "Home";
            $scope.test = "hello there";
        })
        .directive("homePic", function() {
            return {
                restrict: 'AC',
                templateUrl: '/app/modules/views/templates/home/homePic.html',
                replace: true
            }
        })
        .directive("homeTitle", function() {
            return {
                restrict: 'AC',
                templateUrl: '/app/modules/views/templates/home/homeTitle.html',
                replace: false
            }
        })
        .directive("homeContent", function() {
            return {
                restrict: 'AC',
                templateUrl: '/app/modules/views/templates/home/homeContent.html',
                replace: false
            }
        });
});