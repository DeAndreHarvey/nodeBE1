myApp.factory('UserFactory', function ($http){
  // The factory is nothing more than a function that returns an object
  var users = [];
  var Currentuser = [];
  var user= [];
  var factory = {};
  // Add a getStudents key to the factory object with a value of a function.
  factory.index = function(callback) {
  // Where do we get access to $http?
    $http.get('/users').success(function(output) {
        users = output;
        callback(users, Currentuser);
      })
  }
  // note the use of callbacks!
  // Restful syntax: create = add one to that object
  factory.createUser = function(info, callback) {
    $http.post('/users',info).success(function(data) {
      console.log('test');
      Currentuser = data;
      callback();
    })
}

  factory.showOne = function (id, callback) {
    console.log(id.user_id);
    $http.get('/show/' + id.user_id).success(function (output) {
      console.log(output);
      user = output;
      console.log(user);
      callback(user);
    })
  }
  return factory;
});
