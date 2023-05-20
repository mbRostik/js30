angular.module('myApp', [])
    .controller('myController', function ($scope) {
        $scope.users = [
            { firstName: 'John', lastName: 'Doe', dateOfBirth: new Date('1990-01-01'), age: 30 },
            { firstName: 'Jane', lastName: 'Doe', dateOfBirth: new Date('1995-02-15'), age: 25 },
            { firstName: 'Bob', lastName: 'Smith', dateOfBirth: new Date('1975-12-31'), age: 45 }
        ];
    });
