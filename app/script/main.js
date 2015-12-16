require.config({
    paths:{
        'jquery':'../bower_components/jquery/dist/jquery',
        "angular" : '../bower_components/angularjs/angular',
        "angular_route" : '../bower_components/angular-route/angular-route',
        "materialize" : '../bower_components/materialize/dist/js/materialize',
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
            deps:['jquery','angular','angular_route','materialize']
        },
        "materialize":{
            deps:['jquery','angular']
        }
    }
});
require(['app'], function(app,coreModule){
    angular.bootstrap(document,['app','coreModule']);
});