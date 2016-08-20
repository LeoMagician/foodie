define(function(){
    var coreModule = angular.module('coreModule');
    coreModule.controller('loginController', function($scope, $uibModalInstance, $uibModal, UserService, FlashService, UserInfoService) {
        $scope.login = function() {
            // $uibModalInstance.close();
            UserService.Login()
                .then(function(user) {
                    UserInfoService.userLogin(user);
                })
                .catch(function(err) {
                    FlashService.Error(err);
                });
            
        };

        $scope.signUp2 = function() {
                $uibModalInstance.close();
                var modalInstance = $uibModal.open({
                    templateUrl: '/app/modules/views/templates/signupTemp.html',
                    controller: 'signUpController'
                });
            }
    });
});