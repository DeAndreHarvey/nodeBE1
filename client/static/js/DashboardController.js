myApp.controller('DashboardController', function ($scope, UserFactory, ItemFactory){
  // we don't need a factory for this demo, it wouldn't make a difference if we did.
    $scope.users = [];
    $scope.currentuser = [];
    UserFactory.index(function(users, currentuser){
      console.log(currentuser);
      $scope.users = users;
      $scope.currentuser = currentuser;

    })

    $scope.items = [];
    ItemFactory.index(function(data){
      console.log(data);
      $scope.items = data;

    })

  $scope.addNewItem = function () {
    $scope.newItem.name = $scope.currentuser.name;
    ItemFactory.addItem($scope.newItem, function () {
      ItemFactory.index(function(data){
        $scope.items = data;
      })
    })
  }

  })
