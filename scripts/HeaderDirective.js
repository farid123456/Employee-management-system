angular.module('EmployeeManagementSystem')

    .directive("tbHeader", function() {
        return {
            restrict: 'E',
            templateUrl: 'views/header.html'
        }
    });