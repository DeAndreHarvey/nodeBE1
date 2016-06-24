
var users = require('./../controllers/users.js');
var items = require('./../controllers/items.js');
// This is our routes.js file located in server/config/routes.js
 // This is where we will define all of our routing rules!
 // We will have to require this in the server.js file (and pass it app!)
 module.exports = function(app) {
 // verb: get, plural of target as the URI is the RESTful index method (it returns all friends)
  app.get('/users', function(req, res) {
    users.index(req,res);
  });
  app.post('/users', function (req,res) {
    users.create(req,res);

  })

  app.get('/show/:id', function (req,res) {
    console.log('got here');
    users.show(req,res);
  })


  app.get('/items', function(req, res) {
    items.index(req,res);
  });
  app.post('/items', function (req,res) {
    items.create(req,res);
   })
 };
