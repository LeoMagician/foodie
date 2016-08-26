define(function() {
    var coreModule = angular.module('coreModule');
    coreModule.controller('loginController', function($scope, $uibModalInstance, $uibModal, UserService, FlashService, AuthenticationService) {

        $scope.submit = function() {
            (function initController() {
                // reset login status
                AuthenticationService.ClearCredentials();
            })();

            var user = {
                email: $scope.email,
                password: $scope.password
            }

            AuthenticationService.Login(user, function(response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(user.email, user.password);
                    $uibModalInstance.close();
                    console.log("success login")
                } else {
                    FlashService.Error(response.message);
                }
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