const express = require('express')
const router = express.Router()

const usersController = require ('../controllers/usersControllers');

router.get('/users', usersController.indexAll);
router.get('/users/:id_user', usersController.indexOne);
router.get('/users/email', usersController.indexByEmail);

router.post('/users', usersController.store);
router.put('/users/update/:id_user', usersController.update);
router.patch('/users/update-image/:id_user', usersController.updateImage);

router.post('/login', usersController.login)
router.post('/logout', usersController.logout)

module.exports = router