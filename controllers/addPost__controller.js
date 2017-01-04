app.controller('fromForm', [function($scope, factor) {
    $scope.factor = factor;
    $scope.save = function(post) {
        angular.copy(post, factor.postInf);
    }
}]);
