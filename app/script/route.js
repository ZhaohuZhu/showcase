/**
 * Created by derek on 4/8/2015.
 */
define([], function () {
    var mainSaleswebDependencies = [
        //'services/salesweb/mainServices',
        //'directives/salesweb/mainDirective',
    ];

    //var mainServicewebDependencies = [
    //    'services/serviceweb/mainServicewebServices',
    //    'directives/serviceweb/mainServicewebDirectives',
    //    'filters/serviceweb/mainServicewebFilters',
    //];

    var addDependencies = function (newDependencies) {
        var files = newDependencies;
        files = mainSaleswebDependencies.concat(files);
        //files = mainServicewebDependencies.concat(files);
        return files;
    }

    return {
        defaultRoutePath: '/401',
        routes: {
            '/401': {
                templateUrl: '/app/views/main/test.html',
                dependencies: addDependencies([
                    'controller/main/mainController'
                ])
            }
        }
    };
});















