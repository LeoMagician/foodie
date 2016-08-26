requirejs.config({
    paths: {
        'angular': '/bower_components/angular/angular.min',
        'angular-route': '/bower_components/angular-route/angular-route.min',
        'jquery': '/bower_components/jquery/dist/jquery.min',
        'ui-bootstrap': '/bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
        'angular-cookies': '/bower_components/angular-cookies/angular-cookies.min',
        'base64': '/bower_components/js-base64/base64.min',
        // 'async': 'bower_components/requirejs-plugins/src/async',
        // 'google-maps': 'bower_components/angular-google-maps/dist/angular-google-maps',
        // 'ngMap': '/bower_components/ngmap/build/scripts/ng-map.min',
        //load the modules
        'coreModule': '/app/modules/coreModule'
    },
    shim: {
        'angular': {
            deps: ['jquery']
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-cookies': {
            deps: ['angular']
        },
        'ui-bootstrap': {
            deps: ['angular']
        },
        'coreModule': {
            deps: ['angular-route', 'ui-bootstrap', 'angular-cookies']
        }
    }
});

require(['coreModule']);