define(function() {
    var coreModule = angular.module('coreModule');

    coreModule.controller('dinnerController', function($scope) {
        $scope.name = "dinner page";
    });
});