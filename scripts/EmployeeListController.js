angular.module('EmployeeManagementSystem')

    .controller("EmployeeListController", '$scope', '$location', '$routeParams', 'EmployeeList', function($scope, $location, $routeParams, EmployeeList) {
        $scope.list = EmployeeList.get();
        $scope.employee = angular.copy(EmployeeList.findById(parseInt($routeParams.id)));   // Update the item

        $scope.save = function($event) {
            $event.preventDefault();
            if($routeParams.id) {
                EmployeeList.update($scope.employee);
            } else {
                EmployeeList.add($scope.employee);
            }
            $scope.employee = {};
            $location.path("/todo");
        };
        $scope.removeItem = function(entry) {
            EmployeeList.removeItem(entry);
        };
    });