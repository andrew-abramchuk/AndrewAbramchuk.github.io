var app = angular.module('app', []);

app.controller('firstController', ["$http", "$scope", "factor", function($http, $scope, factor) {
    $http.get('https://api.nytimes.com/svc/books/v3/lists.json?api-key=66ee38aa9363428c8d7f79bc9bdf9d30&list=business-books')
        .success(function(result) {
            $scope.results = result.results;
        })
        .error(function(data, status) {
            console.log(data);
            console.log(status);
        });

    $scope.factor = factor;
}]);

app.controller('fromForm', ["$scope", "factor", function($scope, factor) {
    $scope.save = function(post) {
        angular.copy(post, factor.postInf);
    }
}]);

app.filter('myLimitTo', [function($scope) {
    return function(obj, limit) {
        var keys = Object.keys(obj);

        if (limit < 1)
            return obj;

        if (keys.length < 1)
            return [];


        var ret = new Object,
            count = 0;
        angular.forEach(keys, function(key, arrayIndex) {
            if (count >= limit) {
                return false;
            }
            ret[key] = obj[key];
            count++;
        });

        return ret;
    };
}]);


app.factory('factor', [function() {
    return {
        postInf: {}
    }
}]);
