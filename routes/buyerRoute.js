const router = require('express').Router()
const buyerController = require('../controllers/buyerController')


router.route('/list')
  .get(buyerController.getBuyers)
  

router.route('/:id')
  .get(buyerController.getaBuyer)
  .delete(buyerController.deleteBuyer)

module.exports = router