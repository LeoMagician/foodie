define(function() {
    var coreModule = angular.module('coreModule');

    coreModule.controller('homeController', function($scope) {
        $scope.name = "Home";
        $scope.test = "hello there";
    });
});