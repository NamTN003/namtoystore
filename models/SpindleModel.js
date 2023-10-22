var mongoose = require('mongoose');
var SpindleSchema = mongoose.Schema(
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
var SpindleModel = mongoose.model('spindle', SpindleSchema, 'spindle');
module.exports = SpindleModel;