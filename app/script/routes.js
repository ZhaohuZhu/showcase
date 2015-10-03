define([], function () {
    var mainSaleswebDependencies = [
    ];

    var mainServicewebDependencies = [
    ];

    var addDependencies = function (newDependencies) {
        var files = newDependencies;
        files = mainSaleswebDependencies.concat(files);
        files = mainServicewebDependencies.concat(files);
        return files;
    };
    return {
        defaultRoutePath: '/',
        routes: {
            '/': {
                templateUrl: '/view/main/testView.html',
                dependencies: addDependencies([
                    'controller/main/mainController'
                ])
            },
            '/home': {
                templateUrl: '/view/main/testView.html',
                dependencies: addDependencies([
                    'controller/main/mainController'
                ])
            }
        }
    };
});















