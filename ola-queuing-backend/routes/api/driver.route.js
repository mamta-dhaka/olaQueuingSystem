var express = require('express')

var router = express.Router()

// Map each API to the Controller FUnctions
var DriverController = require('../../controllers/driverController');


router.get('/', DriverController.getDrivers)

router.post('/', DriverController.createDriver)

router.put('/', DriverController.updateDriver)

router.delete('/:id',DriverController.removeDriver)


module.exports = router;
