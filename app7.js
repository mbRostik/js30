angular.module('myApp', [])
    .controller('myController', function ($scope) {
        $scope.users = [
            { firstName: 'John', lastName: 'Doe', age: 30 },
            { firstName: 'Jane', lastName: 'Doe', age: 25 },
            { firstName: 'Alice', lastName: 'Johnson', age: 27 },
            { firstName: 'Bob', lastName: 'Smith', age: 45 },
            { firstName: 'David', lastName: 'Brown', age: 52 }
        ];

    });
