const express = require('express')
const router = express.Router()

const restaurantsControllers = require ('../controllers/restaurantsControllers');

router.get('/restaurants', restaurantsControllers.indexAll);
router.get('/restaurants/:id_restaurant', restaurantsControllers.indexOne);

router.post('/restaurants', restaurantsControllers.store);

//router.put('/restaurants/:id_restaurant', restaurantsControllers.update)

module.exports = router