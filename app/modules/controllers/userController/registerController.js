define(function(){
    var coreModule = angular.module('coreModule');
    
    coreModule.controller('signUpController', function($scope, $uibModalInstance, $uibModal) {

        $scope.login2 = function() {
            $uibModalInstance.close();
                var modalInstance = $uibModal.open({
                    templateUrl: '/app/modules/views/templates/loginTemp.html',
                    controller: 'loginController'
                
                });
            }
    });
});