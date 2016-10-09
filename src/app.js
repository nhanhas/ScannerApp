var app = angular.module("App", ['ngRoute']);

app
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/login', {
                    templateUrl: 'layout/login/login.html',
                    controller: 'LoginController'
                }).
                when('/home', {
                    templateUrl: 'layout/home/home.html',
                    controller: 'HomeController'
                }).
                when('/order', {
                    templateUrl: 'layout/order/order.html',
                    controller: 'OrderController'
                }).
                when('/view2', {
                    templateUrl: 'layout/view2/view2.html',
                    controller: 'View2Controller'
                }).
                otherwise({
                    redirectTo: '/login'
                });
        }
    ]);



