// First add the following two lines at the top of the items controller so that we can access our model through var Item
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Item = mongoose.model('Item');
var User = mongoose.model('User');

// note the immediate function and the object that is returned
module.exports = (function() {
  return {
// notice how index in the factory(client side) is calling the index method(server side)
    index: function(req, res) {
      Item.find({}, function(err, items) {
        if(err){
          console.log("does not compute");
        }
        else{
          console.log('yep');
          res.json(items);
        }
      })
    },
    create: function(req,res){
      User.findOne({name: req.body.name},function (err,user) {
      console.log(req.body);
      var item= new Item(req.body);
      item._user = user._id;
      item.save(function (err) {
        user._items.push(item);
        user.save(function (err) {
        if(err){
          console.log('didnt add');
        }
        else{
          console.log('added');
          res.end();
        }
      })
      })
    })
    }

}
})();
