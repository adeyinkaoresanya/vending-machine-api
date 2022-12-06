const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    id:{
        type: Number
    },

  uuid: ObjectId,

  firstName: {
    type: String,
    required: true
  },

  lastName: {
    type: String,
    required: true
  },

  UserName: {
    type: String
    
  },

email: {
    type: String,
    required: true,
    unique: true
  },

password: {
    type: String,
    required: true
    },

role: {
        type: String,
        default: 'buyer',
        enum: ['buyer', 'seller'],
        required: true
      },
  
products: [{type: Schema.Types.ObjectId, ref: "Products"}],

deposits: [{type: Schema.Types.ObjectId, ref: "Deposits"}]
},
{ timestamps: true }
);


userSchema.pre("save",function(next){
    let user = this
    if(user.isNew){
        user.constructor.find({}).then((result) => {
            console.log(result)
            user.id = result.length + 1;
            next();
          });
    }
})


userSchema.statics.signup = async function(firstName, lastName, userName, email, password) {

  // if (!firstName || !lastName || !userName || !email || !password) {
  //   throw Error('All fields must be completed!')
  // }
    
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const user = await this.create({ firstName, lastName, userName, email, password: hashedPassword })

  return user
}











// userSchema.statics.signup = async function(first_name, last_name, username, email, password) {

//   if (!first_name || !last_name || !username || !email || !password) {
//     throw Error('All fields must be completed!')
//   }
//   // if (!validator.isEmail(email)) {
//   //   throw Error('Email is not valid')
//   // }
//   // if (!validator.isStrongPassword(password)) {
//   //   throw Error('Password is not strong enough. Use a combination of uppercase, lowercase and special characters')
//   // }

//   const isinUse = await this.findOne({ email })

//   if (isinUse) {
//     throw Error('Email already exists')
//   }

//   const salt = await bcrypt.genSalt(10)
//   const hashedPassword = await bcrypt.hash(password, salt)
  
//   const author_name = first_name.concat(" ", last_name);

//   const user = await this.create({ first_name, last_name, author_name, username, email, password: hashedPassword })

//   return user
// }

// // static login method
// userSchema.statics.login = async function(username, password) {

//   if (!username || !password) {
//     throw Error('All fields must be filled')
//   }

//   const user = await this.findOne({ username })
//   if (!user) {
//     throw Error('Incorrect username')
//   }

//   const matchPassword = await bcrypt.compare(password, user.password)
//   if (!matchPassword) {
//     throw Error('Incorrect password')
//   }

//   return user
// }





module.exports = mongoose.model('Users', userSchema)
