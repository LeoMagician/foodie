define(function() {
    var coreModule = angular.module('coreModule', ['ngRoute', 'ui.bootstrap']);

    coreModule.config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .otherwise('/')
                .when('/', {
                    controller: 'homeController',
                    templateUrl: '/app/modules/views/home.html'
                })
                // .when('/login', {
                //     controller: 'loginController'
                // })
                .when('/dinner', {
                    controller: 'dinnerController',
                    templateUrl: '/app/modules/views/dinner.html'
                })
                .when('/dinnerList', {
                    controller: 'dinnerListController',
                    templateUrl: '/app/modules/views/dinnerList.html'
                })
                .when('/createDinner', {
                    controller: 'createDinnerController',
                    templateUrl: '/app/modules/views/createDinner.html'
                })
                .when('/setbasic', {
                    controller: 'setbasicController',
                    templateUrl: '/app/modules/views/createDinner/setbasic.html'
                })
                .when('/setmenu', {
                    controller: 'setmenuController',
                    templateUrl: '/app/modules/views/createDinner/setmenu.html'
                })
                .when('/setguest', {
                    controller: 'setguestController',
                    templateUrl: '/app/modules/views/createDinner/setguest.html'
                })
                .when('/setLocation', {
                    controller: 'setLocationController',
                    templateUrl: '/app/modules/views/setBasicView/setLocation.html'
                })
                .when('/setAmenity', {
                    controller: 'setAmenityController',
                    templateUrl: '/app/modules/views/setBasicView/setAmenity.html'
                })
                .when('/setGuestNum', {
                    controller: 'setGuestNumController',
                    templateUrl: '/app/modules/views/setBasicView/setGuestNum.html'
                })
                .when('/setPlaceType', {
                    controller: 'setPlaceTypeController',
                    templateUrl: '/app/modules/views/setBasicView/setPlaceType.html'
                })
                .when('/setDescription', {
                    controller: 'setDescriptionController',
                    templateUrl: '/app/modules/views/setMenuView/setDescription.html'
                })
                .when('/setDinnerName', {
                    controller: 'setDinnerNameController',
                    templateUrl: '/app/modules/views/setMenuView/setDinnerName.html'
                })
                .when('/setFoodType', {
                    controller: 'setFoodTypeController',
                    templateUrl: '/app/modules/views/setMenuView/setFoodType.html'
                })
                .when('/uploadPhoto', {
                    controller: 'uploadPhotoController',
                    templateUrl: '/app/modules/views/setMenuView/uploadPhoto.html'
                })
                .when('/setDate', {
                    controller: 'setDateController',
                    templateUrl: '/app/modules/views/setGuestView/setDate.html'
                })
                .when('/setDiscount', {
                    controller: 'setDiscountController',
                    templateUrl: '/app/modules/views/setGuestView/setDiscount.html'
                })
                .when('/setPrice', {
                    controller: 'setPriceController',
                    templateUrl: '/app/modules/views/setGuestView/setPrice.html'
                })
                .when('/setRules', {
                    controller: 'setRulesController',
                    templateUrl: '/app/modules/views/setGuestView/setRules.html'
                })
                .when('/manageListing', {
                    controller: 'manageListingController',
                    templateUrl: '/app/modules/views/manageListView/manageListing.html'
                })
                .when('/manageReservation', {
                    controller: 'manageReservationController',
                    templateUrl: '/app/modules/views/manageListView/manageReservation.html'
                });
        }])
        .run(['$http', '$window','$rootScope',  function($http, $window, $rootScope) {
            // add JWT token as default auth header
            $http.defaults.headers.common['Authorization'] = 'Bearer ' + $window.jwtToken;
            $rootScope.dinnerListUrl = "http://localhost:3000/#/dinnerList";
            $rootScope.$on('$locationChangeSuccess', function(event, url, oldUrl, state, oldState) {
                $rootScope.surl = url;
            });
        }]);

    // $(function() {
        require(['modules/moduleReference'], function(references) {
            require(references, function() {
                // $.get('/app/token', function (token) {
                    // window.jwtToken = token;
                    angular.bootstrap(document, ['coreModule']);
                // });
            });
        });
    // })
});