app.controller('fromForm', [function($scope, factor) {
    $scope.factor = factor;
    $scope.save = function(post) {
        $scope.postInf.push(post);
    }
}]);