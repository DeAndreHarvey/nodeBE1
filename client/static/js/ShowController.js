myApp.controller('ShowController', function ($scope, UserFactory, $routeParams){
  $scope.user = [];
  console.log($routeParams);
  $scope.done = [];
  UserFactory.showOne($routeParams, function(data){
    console.log(data);
    $scope.user = data;
    console.log($scope.user._items.length);
  for (var i = 0; i < $scope.user._items.length; i++) {
    $scope.done.push($scope.user._items[i]);
  }

})
})
