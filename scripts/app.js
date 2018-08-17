angular.module('EmployeeManagementSystem', ['ngRoute'])

    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "views/home.html",
                controller: 'EmployeeListController'
            })
            .when('/todo', {
                templateUrl: "views/todo.html",
                controller: 'EmployeeListController'
            })
            .when('/todo/edit/:id', {
                templateUrl: 'views/todo.html',
                controller: 'EmployeeListController'
            })
            .otherwise({ redirectTo: '/todo' });
        $locationProvider.hashPrefix('');   // Deep Linking
    }
]);