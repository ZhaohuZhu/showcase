define([], function () {
    var mainAppDependencies = [
    ];
    var addDependencies = function (newDependencies) {
        var files = newDependencies;
        files = mainAppDependencies.concat(files);
        return files;
    };
    return {
        defaultRoutePath: '/',
        routes: {
            '/': {
                templateUrl: '/view/dashboard/index.html',
                dependencies: addDependencies([
                    'controller/dashboard/dashboardController'
                ])
            },
            '/home': {
                templateUrl: '/view/main/testView.html',
                dependencies: addDependencies([
                    'controller/main/mainController'
                ])
            },
            '/dashboard': {
                templateUrl: '/view/dashboard/index.html',
                dependencies: addDependencies([
                    'controller/main/mainController'
                ])
            }
        }
    };
});















