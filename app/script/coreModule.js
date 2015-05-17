/**
 * Created by derek on 5/17/2015.
 */
define(function(){
    var coreModule = angular.module('coreModule',[]);
    coreModule.controller('MainController', function($scope){
        $scope.title='hellow world';
    });
});