const User = require('../models/users')


const getBuyers = async (req, res, next) => {
  try {
    const buyers = await User.find({role:'buyer'})

    return res.status(200).json({
      status: 'success',
      data: buyers,
    })
  } catch (err) {
    res.status(400).json({error: err.message})
    next(err)
  }
}


const getaBuyer = async (req, res, next) => {
    try {
      const { id } = req.params
      const buyer = await User.findOne({ _id: id })
  
      return res.status(200).json({
        status: 'success',
        data: buyer
      })
    } catch (err) {
      res.status(400).json({error: err.message})
      next(err)
    }
  };




const deleteBuyer = async (req, res) => {
  User.findByIdAndRemove(req.params.id)
      .then(() => {
    return res.status(200).json({
      status: 'success',
      data: "Buyer has been deleted"
    })
  })
  .catch((err) => console.log(err))};
    
    

module.exports = {
  getBuyers,
  getaBuyer,
  deleteBuyer
};