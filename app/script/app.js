/**
 * Created by derek on 5/17/2015.
 */
define(function(){
    var app = angular.module('app',['ngRoute']);

    app.controller('MainController', function($scope){
        $scope.title='hello world';
    });

    app.config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/',{
                controller : 'projectCtrl',
                templateUrl : 'app/view/main/testView.html'
            })
            .when('/home',{
                controller : 'projectCtrl',
                templateUrl : '/app/view/main/testView.html'
            });
    }]);

});