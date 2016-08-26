define(['modules/services/authenticationService',
        'modules/services/flash.service',
        'modules/services/userInfo.service',
        'modules/controllers/userController/loginController',
        'modules/controllers/userController/registerController'
    ],
    function(AuthenticationService, FlashService, UserInfoService, UserService) {

        var coreModule = angular.module('coreModule');
        coreModule.controller('commonController', function($scope, $location, $route, $uibModal, $http, UserInfoService, AuthenticationService) {
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

                $scope.logout = function() {
                    AuthenticationService.ClearCredentials();
                }
            })
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