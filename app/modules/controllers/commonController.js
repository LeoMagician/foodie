define(function() {
    var coreModule = angular.module('coreModule');

    coreModule.controller('commonController', ['$scope', '$routeParams', '$location', '$route', '$uibModal', '$log', function($scope, $routeParams, $location, $route, $uibModal, $log) {
            $scope.test = 'test';
            $scope.items = ['item1', 'item2', 'item3'];
            $scope.animationsEnabled = false;
            $scope.bottom = 'vabar-fixed-bottom';
            $scope.open = function(size) {
                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: '/app/modules/views/templates/loginTemp.html',
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
                    templateUrl: '/app/modules/views/templates/signupTemp.html',
                    controller: 'ModalInstanceCtrl',
                    size: size,
                    resolve: {
                        items: function() {
                            return $scope.items;

                        }
                    }
                });
            }
            $scope.toggleAnimation = function() {
                $scope.animationsEnabled = !$scope.animationsEnabled;
            };


        }])
        .directive("headerTemp", function() {
            return {
                restrict: 'AC',
                templateUrl: '/app/modules/views/templates/headerTemp.html',
                replace: true
            }
        })
        .directive("footerTemp", function($location) {
            return {
                restrict: 'AC',
                templateUrl: '/app/modules/views/templates/footerTemp.html',
                replace: true
                    // scope: {
                    //     fixBottom: "="
                    // },
                    // link: function(scope, elements, atrrs) {
                    //      scope.url = $location.path();
                    //      if (scope.url === '/createDinner') {
                    //         scope.fixBottom="vabar-fixed-bottom";
                    //      } else {
                    //         scope.fixBottom ='';
                    //      }
                    // }
            }
        });

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