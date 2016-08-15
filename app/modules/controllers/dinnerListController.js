define(function() {
    var coreModule = angular.module('coreModule');

    coreModule.controller('dinnerListController', function($scope) {
            $scope.name = "dinner list page";
            $scope.dinnerList = "dinner list section"
            $scope.filter = "dinner filter section";;
            $scope.pagination = "dinner pagination section";
            $scope.map = "dinner map section";
        })
        .directive("dinnerFilter", function() {
            return {
                restrict: 'AC',
                templateUrl: '/app/modules/views/templates/dinnerList/dinnerFilter.html',
                replace: false
            }
        })
        .directive("dinnerList", function() {
            return {
                restrict: 'AC',
                templateUrl: '/app/modules/views/templates/dinnerList/dinnerList.html',
                replace: false
            }
        })
        .directive("dinnerPagination", function() {
            return {
                restrict: 'AC',
                templateUrl: '/app/modules/views/templates/dinnerList/dinnerPagination.html',
                replace: false
            }
        })
        .directive("dinnerMap", function() {
            return {
                restrict: 'AC',
                templateUrl: '/app/modules/views/templates/dinnerList/dinnerMap.html',
                replace: false
            }
        });
});