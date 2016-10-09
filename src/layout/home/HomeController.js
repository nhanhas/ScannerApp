app
    .controller('HomeController', ['$scope', '$location','$rootScope', function($scope, $location,$rootScope) {

        //var for navbar selection
        $scope.viewSelected = 'home';

        $scope.startOrder = function(){
            $location.path('/order')
        };

        $scope.setupDrive = function(){

        };

    }]);


