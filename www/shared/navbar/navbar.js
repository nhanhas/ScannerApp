app

    .directive('navbar', ['$location', function(location) {
        return {
            restrict: 'EA',
            scope: {
            },
            templateUrl: 'shared/navbar/navbar.html',

            link: function (scope, element, attrs) {

                //return to Home
                scope.navHome = function (){
                    location.path('/home');
                };

            }
        };
    }]);