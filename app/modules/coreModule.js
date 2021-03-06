define(function() {
    var coreModule = angular.module('coreModule', ['ngRoute', 'ui.bootstrap', 'ngCookies']);

    coreModule.config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .otherwise('/')
                .when('/', {
                    controller: 'homeController',
                    templateUrl: '/app/modules/views/home.html'
                })
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
                })
                .when('/manageDinner1', {
                    controller: 'manageDinner1Controller',
                    templateUrl: '/app/modules/views/manageListView/manageDinner1.html'
                })
                .when('/manageDinner2', {
                    controller: 'manageDinner2Controller',
                    templateUrl: '/app/modules/views/manageListView/manageDinner2.html'
                })
                .when('/manageDinnerLast', {
                    controller: 'manageDinnerLastController',
                    templateUrl: '/app/modules/views/manageListView/manageDinnerLast.html'
                })
                .when('/manageOrder', {
                    controller: 'manageOrderController',
                    templateUrl: '/app/modules/views/manageListView/manageOrder.html'
                })
                .when('/editProfile', {
                    controller: 'editProfileController',
                    templateUrl: '/app/modules/views/manageListView/editProfile.html'
                })
                .when('/viewProfile', {
                    controller: 'viewProfileController',
                    templateUrl: '/app/modules/views/manageListView/viewProfile.html'
                })

        }])
        .run(function($http, $window, $rootScope, $cookieStore, $location) {
            // keep user logged in after page refresh
            $rootScope.globals = $cookieStore.get('globals') || {};
            if ($rootScope.globals.currentUser) {
                $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
            } else {
                $location.path('/');
                // angular.element('#angularClick').triggerHandler('click');
            }

            $rootScope.dinnerListUrl = "http://localhost:3000/#/dinnerList";
            $rootScope.$on('$locationChangeSuccess', function(event, url, oldUrl, state, oldState) {
                $rootScope.surl = url;
            });
        });

    require(['modules/moduleReference'], function(references) {
        require(references, function() {
            angular.bootstrap(document, ['coreModule']);
        });
    });
});