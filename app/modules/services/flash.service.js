define(function() {
    var coreModule = angular.module('coreModule');

    coreModule.factory('FlashService', Service);

     function Service($rootScope) {
        var service = {};
 
        service.Success = Success;
        service.Error = Error;
 
        initService();
 
        return service;
 
        function initService() {
            $rootScope.$on('$locationChangeStart', function () {
                clearFlashMessage();
            });
 
            function clearFlashMessage() {
                var flash = $rootScope.flash;
                if (flash) {
                    if (!flash.keepAfterLocationChange) {
                        delete $rootScope.flash;
                    } else {
                        // only keep for a single location change
                        flash.keepAfterLocationChange = false;
                    }
                }
            }
        }
 
        function Success(message, keepAfterLocationChange) {
            $rootScope.flash = {
                message: message,
                type: 'success',
                keepAfterLocationChange: keepAfterLocationChange
            };
        }
 
        function Error(message, keepAfterLocationChange) {
            $rootScope.flash = {
                message: message,
                type: 'danger',
                keepAfterLocationChange: keepAfterLocationChange
            };
        }
    }

});