app.controller('fromForm', ["$scope", "factor", function($scope, factor) {
    $scope.factor = factor;
    $scope.save = function(post) {
        angular.copy(post, factor.postInf);
    }
}]);
