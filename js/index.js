angular.module('qln')
.controller('IndexCtrl',['$scope', '$http', function($scope, $http){
  "use strict";

  $http.get('/data/welcome.md').then(function(res){
    $scope.cells = res.data;
  });

}]);
