define(function() {
    var coreModule = angular.module('coreModule');

    coreModule.factory('UserInfoService', Service);

    function Service() {
        var userList = [];
        var userLogin = function(newObj) {
            userList.push(newObj);
        };

        var getUserInfo = function() {
            var userInfo = userList[0];
            userList = [];
            return userInfo;
        }

        return {
            userLogin: userLogin,
            getUserInfo: getUserInfo
        };
    }

});