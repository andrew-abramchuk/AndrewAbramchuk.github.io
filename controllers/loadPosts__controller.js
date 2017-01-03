app.controller('firstController', ["$http", "$scope", "factor", function($http, $scope, factor) {
    $http.get('https://api.nytimes.com/svc/books/v3/lists.json?api-key=66ee38aa9363428c8d7f79bc9bdf9d30&list=business-books')
        .success(function(result) {
            $scope.results = result.results;
        })
        .error(function(data, status) {
            console.log(data);
            console.log(status);
        });
    $scope.filt;

    $scope.postInf = {};
    $scope.factor = factor;
}]);