var CustomerService = require('../services/customerService')

_this = this


exports.getCustomer = async function(req, res, next){

    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;

    console.log(page, limit)

    try{
        var customers = await CustomerService.getCustomers({}, page, limit)
        return res.status(200).json({status: 200, data: customers, message: "Succesfully Requests Recieved"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createCustomer = async function(req, res, next){
    var request = {
        customerId: req.body.customerId
    }

    try{
        var createdRequest = await CustomerService.createCustomers(request)
        return res.status(201).json({status: 201, data: createdRequest, message: "Succesfully Created Request"})
    }catch(e){
        return res.status(400).json({status: 400, message: "Request Creation was Unsuccesfull"})
    }
}

exports.removeCustomer = async function(req, res, next){
    var id = req.params.id;

    try{
        var deleted = await CustomerService.deleteCustomer(id)
        return res.status(204).json({status:204, message: "Succesfully Request Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}
