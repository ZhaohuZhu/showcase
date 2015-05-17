/**
 * Created by derek on 5/17/2015.
 */
require.config({
    path:{
        "angular" : '../bower_components/angularjs/angular',
       // "angular_route" : 'angular-route/angular-route',
        "app":'../script/app',
        "coreModule" : '../script/coreModule'
    },

    shim:{
        "app":{
            deps:['coreModule']
        },
        "coreModule":{
            deps:['angular']
        }
    }
});

require(['app'], function(){
    angular.bootstrap(document,['app']);
});