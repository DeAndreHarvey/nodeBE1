myApp.factory('ItemFactory', function ($http){
// The factory is nothing more than a function that returns an object
var items = []
var factory = {};
// Add a getStudents key to the factory object with a value of a function.
factory.index = function (callback){
  $http.get('/items').success(function(output) {
    console.log(output);
    items = output;
    callback(items);
  })
  }
factory.addItem= function (item, callback) {
  console.log(item);
  $http.post('/items',item).success(function() {
    callback();
  })
}
return factory;
});
