define(function() {
    var coreModule = angular.module('coreModule');

    coreModule.controller('commonController', ['$scope', '$routeParams', '$location', '$route', '$uibModal', '$log', function($scope, $routeParams, $location, $route, $uibModal, $log) {
    
        $scope.items = ['item1', 'item2', 'item3'];
        $scope.animationsEnabled = false;
        $scope.open = function(size) {

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: '/app/modules/views/templates/loginTemp.js',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function() {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function(selectedItem) {
                $scope.selected = selectedItem;
            }, function() {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };


        $scope.signUp = function(size) {

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: '/app/modules/views/templates/loginTemp.js',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function() {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function(selectedItem) {
                $scope.selected = selectedItem;
            }, function() {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        // $scope.toggleAnimation = function() {
        //     $scope.animationsEnabled = !$scope.animationsEnabled;
        // };


    }]);

    coreModule.controller('ModalInstanceCtrl', function($scope, $uibModalInstance, items) {

        $scope.items = items;
        $scope.selected = {
            item: $scope.items[0]
        };

        $scope.ok = function() {
            $uibModalInstance.close($scope.selected.item);
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    });
});