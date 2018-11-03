var moment = require('moment');
var RequestService = require('../services/requestService');

_this = this


exports.getRequests = async function(req, res, next){

    var page = req.query.page ? req.query.page : 1;
    var limit = req.query.limit ? req.query.limit : 100;

    console.log(page, limit)

    try{
        var requests = await RequestService.getRequests({}, page, limit)
        return res.status(200).json({status: 200, data: requests, message: "Succesfully Requests Recieved"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createRequest = async function(req, res, next){
    var request = {
        status: req.body.status,
        customer: req.body.customer,
        driver: req.body.driver,
        reqNu: req.body.reqNu
    }

    try{
        var createdRequest = await RequestService.createRequest(request)
        return res.status(201).json({status: 201, data: createdRequest, message: "Succesfully Created Request"})
    }catch(e){
        return res.status(400).json({status: 400, message: "Request Creation was Unsuccesfull"})
    }
}

exports.updateRequest = async function(req, res, next){

    if(!req.body._id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }

    var id = req.body._id;

    console.log(req.body)

    var request = {
        id,
        status: req.body.status ? req.body.status : null,
        customer: req.body.customer ? req.body.customer : null,
        driver: req.body.driver ? req.body.driver : null
    }

    try{
        var updatedRequest = await RequestService.updateRequest(request)
            return res.status(200).json({status: 200, data: updatedRequest, message: "Succesfully Updated Request"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeRequest = async function(req, res, next){
    var id = req.params.id;

    try{
        var deleted = await RequestService.deleteRequest(id)
        return res.status(204).json({status:204, message: "Succesfully Request Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}

exports.updateRequestIfTimeLimitExceeded = async function(query, page, limit){
    var allRequests = await RequestService.getRequests({}, 1, 100);
    allRequests.docs.forEach(async (req) => {
        console.log(req.status === 'waiting' && moment(req.time).add(5, "minutes").isSameOrBefore(moment()));
        console.log(req.status, moment(req.date).add(5, "minutes"));
        if(req.status === 'waiting' && moment(req.date).add(5, "minutes").isSameOrBefore(moment())) {
            req.status = 'completed';
            try {
                var reqExpired = await RequestService.updateRequest(req)
                    .then((r) => console.log('>22>>>>', r));
            } catch (e) {
                return console.log('error occured in updateRequestIfTimeLimitExceeded', e);
            }
        }
    });
}

