define(function() {
    var coreModule = angular.module('coreModule');

    coreModule.controller('homeController', function($scope) {
            $scope.name = "Home";
            $scope.test = "hello there";
        })
        .directive("headerTemp", function() {
            return {
                restrict: 'AC',
                templateUrl: '/app/modules/views/templates/headerTemp.html',
                replace: true
            }
        });
});