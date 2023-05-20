angular.module('myApp', [])
    .controller('myController', function ($scope) {
        $scope.users = [
            { firstName: 'John', lastName: 'Doe', age: 30 },
            { firstName: 'Jane', lastName: 'Doe', age: 25 },
            { firstName: 'Bob', lastName: 'Smith', age: 45 }
        ];
    });