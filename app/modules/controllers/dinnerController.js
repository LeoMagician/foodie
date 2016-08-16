define(function() {
    var coreModule = angular.module('coreModule');

    coreModule.controller('dinnerController', function($scope) {
        $scope.name = "dinner page";
    })

    .directive("pictureTemp", function() {
        return {
            restrict: 'AC',
            templateUrl: '/app/modules/views/templates/dinner/pictureTemp.html',
            replace: false
            }
    })

    .directive("personInfoTemp", function() {
        return {
            restrict: 'AC',
            templateUrl: '/app/modules/views/templates/dinner/personInfoTemp.html',
            replace: false
            }
    })

    .directive("descriptionTemp", function() {
        return {
            restrict: 'AC',
            templateUrl: '/app/modules/views/templates/dinner/descriptionTemp.html',
            replace: false
            }
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
        }); 
});

