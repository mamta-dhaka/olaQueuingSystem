var express = require('express')

var router = express.Router()

var RequestController = require('../../controllers/requestController');


// Map each API to the Controller FUnctions

router.get('/', RequestController.getRequests)

router.post('/', RequestController.createRequest)

router.put('/', RequestController.updateRequest)

router.delete('/:id',RequestController.removeRequest)

// Export the Router

module.exports = router;
