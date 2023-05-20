angular.module('myApp', [])
    .controller('myController', function ($scope) {
        $scope.users = [
            { firstName: 'John', lastName: 'Doe', age: 30 },
            { firstName: 'Jane', lastName: 'Doe', age: 25 },
            { firstName: 'Bob', lastName: 'Smith', age: 45 },
            { firstName: 'Alice', lastName: 'Johnson', age: 28 },
            { firstName: 'Tom', lastName: 'Brown', age: 50 },
            { firstName: 'Julia', lastName: 'Davis', age: 35 },
            { firstName: 'Peter', lastName: 'Jones', age: 42 },
            { firstName: 'Mary', lastName: 'Williams', age: 29 },
            { firstName: 'David', lastName: 'Wilson', age: 55 },
            { firstName: 'Sarah', lastName: 'Taylor', age: 31 }
        ];
    });
