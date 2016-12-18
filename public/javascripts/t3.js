
// Define our app
var app = angular.module('T3', ['ngResource', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

// Home controller
app.controller('HomeCtrl', ['$scope', '$resource',
    function($scope, $resource) {
        var Courses = $resource('/courses');
        Courses.query(function(courses) {
            $scope.courses = courses;
        });
    }
]);
