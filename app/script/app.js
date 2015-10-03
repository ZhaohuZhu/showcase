define(['routes', 'service/dependencyResolverFor'],function(config,dependencyResolverFor){
    var app = angular.module('app',['ngRoute']);
    app.controller('MainController', function($scope){
        $scope.title='hello world';
    });
    app.config([
        '$routeProvider',
        '$locationProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',
        function($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide){
            app.controller = $controllerProvider.register;
            app.directive = $compileProvider.directive;
            app.filter = $filterProvider.register;
            app.factory = $provide.factory;
            app.service = $provide.service;
            app.provider = $provide.provider;
    }]);

    app.config(['$routeProvider', function($routeProvider){
        if (config.routes !== undefined) {
            angular.forEach(config.routes, function(route, path) {
                $routeProvider.when(path, {
                    templateUrl: route.templateUrl,
                    resolve: dependencyResolverFor(route.dependencies),
                    reloadOnSearch: false
                });
            });
        }
    }]);
    return app;
});