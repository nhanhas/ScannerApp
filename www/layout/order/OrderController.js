app
    .controller('OrderController', ['$scope', '$location','$rootScope', function($scope, $location,$rootScope) {

        $scope.onAddNewProduct = function (){
          console.log('adding...')
        };


        $scope.onResetAll = function (){
            console.log('resetting...')
        };

    }]);