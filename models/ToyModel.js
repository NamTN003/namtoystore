var mongoose = require('mongoose');
var ToySchema = mongoose.Schema(
   {
      brand: {
         type: String,
        // required: [true, 'brand can not be empty']
      },
      price : {
         type : Number,
         min : 1
      },
      description : String,
      image: String
   }
);
var ToyModel = mongoose.model('toy', ToySchema, 'toy');
module.exports = ToyModel;