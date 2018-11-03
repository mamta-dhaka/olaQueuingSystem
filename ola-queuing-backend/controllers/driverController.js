var DriverService = require('../services/driverService')

_this = this


exports.getDrivers = async function(req, res, next){

    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;

    console.log(page, limit)

    try{
        var drivers = await DriverService.getDrivers({}, page, limit)
        return res.status(200).json({status: 200, data: drivers, message: "Succesfully drivers Recieved"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createDriver = async function(req, res, next){
    var request = {
        driverId: req.body.driverId,
        active: req.body.active,
        requests: req.body.requests
    }

    try{
        var createdDriver = await DriverService.createDriver(request)
        return res.status(201).json({status: 201, data: createdDriver, message: "Succesfully Created Driver"})
    }catch(e){
        return res.status(400).json({status: 400, message: "Driver Creation was Unsuccesfull"})
    }
}

exports.updateDriver = async function(req, res, next){
    if(!req.body._id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }

    var id = req.body._id;

    console.log('8848848484', req.body)

    var request = {
        id,
        active: req.body.active,
        requests: req.body.requests,
        driver: req.body.driver
    }

    try{
        var updatedRequest = await DriverService.updateDriver(request)
        return res.status(200).json({status: 200, data: updatedRequest, message: "Succesfully Updated driver"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeDriver = async function(req, res, next){
    var id = req.params.id;

    try{
        var deleted = await DriverService.deleteDriver(id)
        return res.status(204).json({status:204, message: "Succesfully Request Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}
