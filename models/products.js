const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productSchema = new Schema({
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

Seller_Id: [{type: Schema.Types.ObjectId, ref: "users"}]
},

{ timestamps: true });



productSchema.pre("save",function(next){
    let product = this
    if(product.isNew){
        product.constructor.find({}).then((result) => {
            console.log(result)
            product.id = result.length + 1;
            next();
          });
    }
})

module.exports = mongoose.model('products', productSchema)
