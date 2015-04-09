define(['app' ], function(app) {
    'use strict';

    app.controller('profile', ['$scope', '$timeout', '$location',
        function($scope, $timeout, $location) {

            //$scope.user = $cookieStore.get('user');
            //console.log($scope.user)
            //
            //$scope.alert = null;
            //$scope.flash = function(alert, fa, msg){
            //    $scope.alert = {
            //        enable: true,
            //        alert: alert,
            //        fa: fa,
            //        msg: msg
            //    };
            //    $timeout(function() {
            //        $location.path('/');
            //    },0);
            //};
            //$scope.save = function() {
            //    $scope.flash('success', 'save', 'Successfully saved changes!');
            //};
            //$scope.cancel = function(){
            //    $scope.flash('info', 'trash-o', 'Changes have been discarded!');
            //    $timeout(function() {
            //        $location.path('/');
            //    },0);
            //};
        }
    ]);

});

