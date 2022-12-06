const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const depositSchema = new Schema({
    id:{
        type: Number
    },

  uuid: ObjectId,

  title: {
    type: String,
    required: true
  },

  cost: {
    type: Number,
    required: true
  },  
buyer_Id: [{type: Schema.Types.ObjectId, ref: "users"}],
product_Id: [{type: Schema.Types.ObjectId, ref: "products"}]
},
{ timestamps: true });



depositSchema.pre("save",function(next){
    let deposit = this
    if(deposit.isNew){
        deposit.constructor.find({}).then((result) => {
            console.log(result)
            deposit.id = result.length + 1;
            next();
          });
    }
});

module.exports = mongoose.model('deposits', depositSchema)
