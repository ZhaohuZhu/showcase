/**
 * Created by derek on 5/17/2015.
 */
require.config({
    paths:{
        'jquery':'../bower_components/jquery/dist/jquery',
        "angular" : '../bower_components/angularjs/angular',
        "angular_route" : '../bower_components/angular-route/angular-route',
        "app":'../script/app',
        "coreModule" : '../script/coreModule'
    },

    shim:{
        "app":{
            deps:['coreModule']
        },
        "angular":{
            deps:['jquery']
        },
        "angular_route":{
            deps:['angular']
        },
        "coreModule":{
            deps:['jquery','angular','angular_route']
        }
    }
});

require(['app'], function(app){
    angular.bootstrap(document,['app']);
});