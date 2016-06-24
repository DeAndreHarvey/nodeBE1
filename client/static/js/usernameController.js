myApp.controller('user_nameController', function ($scope, UserFactory,$location){


    $scope.AddUser = function () {
      console.log('start');
      UserFactory.createUser($scope.newUser, function () {
        $location.url('/dashboard');
    })
  }
})
