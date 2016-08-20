define(['modules/services/user.service',
        'modules/services/flash.service',
        'modules/services/userInfo.service',
        'modules/controllers/userController/loginController',
        'modules/controllers/userController/registerController'], 
        function(UserService, FlashService, UserInfoService) {
    
    var coreModule = angular.module('coreModule');
    coreModule.controller('commonController', ['$scope', '$location', '$route', '$uibModal', '$http', function($scope, $location, $route, $uibModal, $http) {
            $scope.userObj = UserInfoService.getUserInfo();
            $scope.bottom = 'vabar-fixed-bottom';
            $scope.open = function(size) {
                var modalInstance = $uibModal.open({
                    templateUrl: '/app/modules/views/templates/loginTemp.html',
                    controller: 'loginController'              
                });

            };

            $scope.signUp = function(size) {
                var modalInstance = $uibModal.open({
                    templateUrl: '/app/modules/views/templates/signupTemp.html',
                    controller: 'signUpController'
                });
            }
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
            }
        });
});