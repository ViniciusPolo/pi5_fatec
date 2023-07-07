const express = require('express')
const router = express.Router()

const addressesController = require ('../controllers/addressesControllers');

router.get('/addresses', addressesController.indexAll);
router.get('/addresses/:belong-to/:belong-type', addressesController.indexOne);

router.post('/addresses', addressesController.store);
router.put('/addresses/:belong-to/:belong-type', addressesController.update);

module.exports = router