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















