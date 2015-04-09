define(['route','dependencyResolverFor'], function(config,dependencyResolverFor) {

    var app = angular.module('app',[]);

    app.config(
        [   '$routeProvider',
            '$locationProvider',
            '$controllerProvider',
            '$compileProvider',
            '$filterProvider',
            '$provide',
            function(){

                if (config.routes !== undefined) {
                    angular.forEach(config.routes, function(route, path) {
                        $routeProvider.when(path, {
                            templateUrl: route.templateUrl,
                            resolve: dependencyResolverFor(route.dependencies),
                            reloadOnSearch: false
                        });
                    });
                }

                console.log('hgk',config.defaultRoutePath);

                if (config.defaultRoutePaths !== undefined) {
                    $routeProvider.otherwise({
                        redirectTo: config.defaultRoutePath
                    });
                }
            }
        ]);


    app.run(function($rootScope, $location) {
        // test = new socket();
//        var ws = new socket();
        $rootScope.$on('$routeChangeStart',
            function(evt, next, curr) {

                $location.path('www.google.ca');
            }
        )

        //$rootScope.$on('$routeChangeSuccess', function () {
        //
        //    if(location.hash != '/' && location.hash != '')
        //    {
        //        setTimeout(function(){
        //            //$('#wrapper').removeClass('bounceOutRight').addClass('bounceInLeft')
        //        }, 300);
        //    }
        //});
    });
    console.log("after config");
    return app;
});