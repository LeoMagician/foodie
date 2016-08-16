define(function() {
    var coreModule = angular.module('coreModule');

    coreModule.controller('dinnerController', function($scope) {
        $scope.name = "dinner page";
    })
    .directive("bookTemp", function() {
            return {
                restrict: 'AC',
                templateUrl: '/app/modules/views/templates/dinner/bookTemp.html',
                replace: false
            }
        })
    .directive("hostinfoTemp", function() {
            return {
                restrict: 'AC',
                templateUrl: '/app/modules/views/templates/dinner/hostinfoTemp.html',
                replace: false
            }
        })
       .directive("reviewTemp", function() {
            return {
                restrict: 'AC',
                templateUrl: '/app/modules/views/templates/dinner/reviewTemp.html',
                replace: false
            }
        }) 
});