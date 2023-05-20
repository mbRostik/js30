var app = angular.module('myApp', []);

app.controller('myController', function ($scope) {
    $scope.users = [
        { firstName: 'John', lastName: 'Doe', dob: '1980-01-01' },
        { firstName: 'Jane', lastName: 'Doe', dob: '1995-02-15' },
        { firstName: 'Bob', lastName: 'Smith', dob: '1976-12-05' }
    ];
});