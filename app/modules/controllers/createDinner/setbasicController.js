define(function() {
    var coreModule = angular.module('coreModule');

    coreModule.controller('setbasicController', function($scope) {
        $scope.name = "setbasicController";
    })
});