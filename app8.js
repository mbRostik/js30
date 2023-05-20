angular.module('myApp', [])
    .controller('myController', function ($scope) {
        $scope.users = [
            { firstName: 'John', lastName: 'Doe', age: 5 },
            { firstName: 'Jane', lastName: 'Doe', age: 15 },
            { firstName: 'Bob', lastName: 'Smith', age: 27},
            { firstName: 'Alice', lastName: 'Johnson', age: 18 },
            { firstName: 'Mike', lastName: 'Brown', age: 7 },
            { firstName: 'Sarah', lastName: 'Lee', age: 24 },
            { firstName: 'David', lastName: 'Davis', age: 10 },
            { firstName: 'Lisa', lastName: 'Wilson', age: 3 },
            { firstName: 'Chris', lastName: 'Taylor', age: 21 }
        ];

    });
