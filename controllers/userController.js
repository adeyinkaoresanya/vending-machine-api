const User = require('../models/users')

const createUser = async (req, res, next) => {
  try {
    const { firstName, lastName, userName, email, password } = req.body

    const createdUser = await User.signup(firstName, lastName, userName, email, password)
    
    return res.status(200).json({
      status: 'success',
      data: createdUser,
    })
  } catch (err) {
    next(err)
  }
}


const getUsers = async (req, res, next) => {
  try {
    const users = await User.find()

    return res.status(200).json({
      status: 'success',
      data: users,
    })
  } catch (err) {
    res.status(400).json({error: err.message})
    next(err)
  }
}


const getaUser = async (req, res, next) => {
    try {
      const { id } = req.params
      const user = await User.findOne({ _id: id })
  
      return res.status(200).json({
        status: 'success',
        data: user,
      })
    } catch (err) {
      res.status(400).json({error: err.message})
      next(err)
    }
  };




const deleteUser = async (req, res) => {
User.findByIdAndRemove(req.params.id)
    .then(() => {
  return res.status(200).json({
    status: 'success',
    data: "User has been deleted"
  })
})
.catch((err) => console.log(err))};
    
    

module.exports = {
  createUser,
  getUsers,
  getaUser,
  deleteUser
};