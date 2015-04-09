/**
 * Created by daniel on 4/8/2015.
 */
require.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    waitSeconds: 5000,
    paths: {
        "jQuery" : "../bower/jquery/dist/jquery",
        "angular" : "../bower/angular/angular.min",
        "angular_route" : "../bower/angular-route/angular-route.min"
    },

    shim: {
        'app': {
            deps: ['jQuery', 'angular', 'angular_route']
        },
        'angular' :{
            deps: ['jQuery']
        },
        'angular_route' :{
            deps: ['jQuery','angular']
        }
    }
});
require(
    [
        'app', 'jQuery','angular','angular_route'
    ]
);

