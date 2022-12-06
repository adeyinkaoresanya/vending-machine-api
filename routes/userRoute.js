const router = require('express').Router()
const userController = require('../controllers/userController')


router.route('/list')
  .get(userController.getUsers)

router.route('/create')
  .post(userController.createUser)

router.route('/:id')
  .get(userController.getaUser)
  .delete(userController.deleteUser)

module.exports = router