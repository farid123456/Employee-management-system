angular.module('EmployeeManagementSystem')

    .factory("EmployeeList", function() {
        var EmployeeList = {};
        EmployeeList.list = [
            {id: 1, username: ' Farid Afzal', email: 'p146102@nu.edu.pk', phone: '0304325'},
            {id: 2, username: ' Zubair', email: 'p146102@nu.edu.pk', phone: '0304325'},
            {id: 3, username: ' Ibtasam', email: 'p146102@nu.edu.pk', phone: '0304325'}
            ];

        EmployeeList.get = function() {
            return EmployeeList.list;
        };

        EmployeeList.findById = function(id) {
            for (var item = 0; item < EmployeeList.list.length; item++) {
                if(EmployeeList.list[item].id === id) {   // Find the row using $routeParams id.
                    return EmployeeList.list[item];   // Return the full row
                }
            }
        };

        EmployeeList.update = function(entry) {
            var updatedItem = EmployeeList.findById(entry.id);
            updatedItem.username = entry.username;    // entry is selected row and all values stored in this.
            updatedItem.email = entry.email;
            updatedItem.phone = entry.phone;
        };

        EmployeeList.add = function(entry) {               // Define this function through Service object.
            var maxId = EmployeeList.list.length;
            entry.id = maxId + 1;                       // Create the new Id and assigned it to new row.
            EmployeeList.list.push(entry);              // Push the new entry in array
        };

        EmployeeList.removeItem = function(entry) {
            var index = EmployeeList.list.indexOf(entry);   // Return the first occurrence of specified value.
            EmployeeList.list.splice(index,1);
        };
        return EmployeeList;  //then return the complete object.
    });