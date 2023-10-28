const express = require('express')
const router = express.Router()

const restaurantsControllers = require ('../controllers/restaurantsControllers');

router.get('/restaurants', restaurantsControllers.indexAll);
router.get('/restaurants/:id_restaurant', restaurantsControllers.indexOne);
router.get('/restDest', restaurantsControllers.indexAllDest);


router.post('/restaurants', restaurantsControllers.store);

router.put('/restaurants/:id_restaurant', restaurantsControllers.update)
router.patch('/restaurants/:id_restaurant', restaurantsControllers.updateLogo)

router.get('/restaurants/owner/:user_owner', restaurantsControllers.findAllbyIdOwner)

module.exports = router