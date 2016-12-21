
// Define our app
var app = angular.module('T3', []);

// Configure the route provider
// app.config(['$routeProvider', function($routeProvider) {
//     $routeProvider
//         .when('/', {
//             templateUrl: 'partials/index.html',
//             controller: 'HomeCtrl'
//         })
//         .otherwise({
//             redirectTo: '/'
//         });
// }]);

// Home controller
// app.controller('HomeCtrl', ['$scope', '$resource',
//     function($scope, $resource) {
//         var Courses = $resource('/courses');
//         Courses.query(function(courses) {
//             $scope.courses = courses;
//         });
//     }
// ]);

// Header controller (index.jade)
app.controller('headerCtrl', function($scope) {
    $scope.view = {
        name: ''
    };
});
