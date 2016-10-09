app

    .directive('toolbar', ['$location', function(location) {
        return {
            restrict: 'EA',
            scope: {
                viewSelected:'=',
                onAdd:'&',
                onReset:'&'
            },
            templateUrl: 'shared/toolbar/toolbar.html',

            link: function (scope, element, attrs) {

                scope.goBack = function (){
                    location.path('/home');
                };

                scope.addNewProduct = function(){
                    if(scope.onAdd){
                        scope.onAdd();
                    }
                };

                scope.onResetAll = function(){
                    if(scope.onReset){
                        scope.onReset();
                    }
                };

            }
        };
    }]);