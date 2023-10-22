var mongoose = require('mongoose');
var HammerSchema = mongoose.Schema(
   {
      brand: {
         type: String,
        required: [true, 'name can not be empty']
      },
      price : {
         type : Number,
         min : 1
      },
      description : String,
      image: String
   }
);
var HammerModel = mongoose.model('hammer', HammerSchema, 'hammer');
module.exports = HammerModel;