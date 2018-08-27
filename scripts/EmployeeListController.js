angular.module('EmployeeManagementSystem')

    .controller("EmployeeListController", ['$scope', '$translate', '$location', '$routeParams', 'EmployeeList', function($scope, $translate, $location,  $routeParams, EmployeeList) {
        $scope.changeLanguage = function (key) {
            $translate.use(key);
        };
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
    }]);
